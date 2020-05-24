import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ExamQuestionService } from 'src/app/shared/services/exams/exam-question.service';

@Component({
  selector: 'app-questions-question-edit',
  templateUrl: './edit.component.html',
  providers: [ExamQuestionService]
})
export class QuestionEditComponent extends DialogComponent implements OnInit {
  roles$ = null;

  constructor(
    private examQuestionService: ExamQuestionService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<QuestionEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);
    this.form = this.fb.group({
      title: [data.title, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      note: [data.note, []]
    });
  }

  ngOnInit(): void {

  }

  getRoles() {

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
