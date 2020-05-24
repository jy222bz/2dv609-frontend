import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { ExamQuestionsService } from 'src/app/shared/services/exams/exam-questions.service';
import { QuestionTypesService } from 'src/app/shared/services/question-types/question-types.service';

@Component({
  selector: 'app-questions-add',
  templateUrl: './add.component.html',
  providers: [QuestionTypesService]
})
export class AddComponent extends DialogComponent implements OnInit {
  types$ = null;

  constructor(
    private examQuestionsService: ExamQuestionsService,
    private questionTypesService: QuestionTypesService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      type: [1, [Validators.required]],
      note: ['', []]
    });
    this.types$ = this.questionTypesService.get();
  }

  ngOnInit(): void {

  }

  getRoles() {

  }

  submit() {
    this.examQuestionsService.create(this.data.id, this.form.value)
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
