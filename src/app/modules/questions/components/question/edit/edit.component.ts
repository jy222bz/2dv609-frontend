import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ExamQuestionService } from 'src/app/shared/services/exams/exam-question.service';
import { QuestionTypesService } from 'src/app/shared/services/question-types/question-types.service';

@Component({
  selector: 'app-questions-question-edit',
  templateUrl: './edit.component.html',
  providers: [ExamQuestionService, QuestionTypesService]
})
export class QuestionEditComponent extends DialogComponent implements OnInit {
  types$ = null;

  constructor(
    private examQuestionService: ExamQuestionService,
    private questionTypesService: QuestionTypesService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<QuestionEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);
    this.form = this.fb.group({
      text: [data.text, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      type: [data.type, [Validators.required]],
      note: [data.note, []]
    });
    this.types$ = this.questionTypesService.get();
  }

  ngOnInit(): void {

  }

  submit() {
    this.examQuestionService.update(this.data.examId, this.data.id, this.form.value)
      .subscribe(
        (data) => {
          this.working = false;
          this.dialog.close(data);
        },
        (error) => {
          this.error = error.error.description;
          this.working = false;
        }
      );
  }
}
