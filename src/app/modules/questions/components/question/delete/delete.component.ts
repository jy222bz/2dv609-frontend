import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { ExamQuestionService } from 'src/app/shared/services/exams/exam-question.service';

@Component({
  selector: 'app-questions-question-delete',
  templateUrl: './delete.component.html',
  providers: [ExamQuestionService]
})
export class QuestionDeleteComponent extends DialogComponent {
  constructor(
    private examQuestionService: ExamQuestionService,
    private dialog: MatDialogRef<QuestionDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);
  }

  submit() {
    this.examQuestionService.delete(this.data.examId, this.data.id)
      .subscribe(
        (data) => {
          this.working = false;
          this.dialog.close([this.data.id]);
        },
        (error) => {
          this.error = error;
          this.working = false;
        }
      );
  }
}
