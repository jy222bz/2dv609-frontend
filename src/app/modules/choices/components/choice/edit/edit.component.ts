import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ExamQuestionChoiceService } from 'src/app/shared/services/exams/exam-question-choice.service';

@Component({
  selector: 'app-choices-choice-edit',
  templateUrl: './edit.component.html',
  providers: [ExamQuestionChoiceService]
})
export class ChoiceEditComponent extends DialogComponent implements OnInit {
  constructor(
    private examQuestionChoiceService: ExamQuestionChoiceService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<ChoiceEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      text: [data.choice.text, [Validators.required, Validators.minLength(1)]],
      correct: [data.choice.correct, [Validators.required]],
      note: [data.choice.note, []]
    });
  }

  ngOnInit(): void {

  }

  submit() {
    this.examQuestionChoiceService.update(this.data.question.examId,this.data.question.id, this.data.choice.id, this.form.value)
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
