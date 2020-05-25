import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../../shared/components/dialog/dialog.component';
import { ExamQuestionChoiceService } from 'src/app/shared/services/exams/exam-question-choice.service';

@Component({
  selector: 'app-choices-choice-delete',
  templateUrl: './delete.component.html',
  providers: [ExamQuestionChoiceService]
})
export class ChoiceDeleteComponent extends DialogComponent {
  constructor(
    private examQuestionChoiceService: ExamQuestionChoiceService,
    private dialog: MatDialogRef<ChoiceDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);
  }

  submit() {
    this.examQuestionChoiceService.delete(this.data.question.examId,this.data.question.id,this.data.choice.id)
      .subscribe(
        (data) => {
          this.working = false;
          this.dialog.close([this.data.choice.id]);
        },
        (error) => {
          this.error = error;
          this.working = false;
        }
      );
  }
}
