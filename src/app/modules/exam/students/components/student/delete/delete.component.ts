import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../../shared/components/dialog/dialog.component';
import { ExamStudentService } from 'src/app/shared/services/exams/exam-student.service';

@Component({
  selector: 'app-students-student-delete',
  templateUrl: './delete.component.html',
  providers: [ExamStudentService]
})
export class StudentDeleteComponent extends DialogComponent {
  constructor(
    private examStudentService: ExamStudentService,
    private dialog: MatDialogRef<StudentDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);
  }

  submit() {
    this.examStudentService.delete(this.data.examId, this.data.id)
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
