import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { ExamService } from 'src/app/shared/services/exams/exam.service';

@Component({
  selector: 'app-exams-exam-delete',
  templateUrl: './delete.component.html',
  providers: [ExamService]
})
export class ExamDeleteComponent extends DialogComponent {
  constructor(
    private examService: ExamService,
    private dialog: MatDialogRef<ExamDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);
  }

  submit() {
    this.examService.delete(this.data.id)
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
