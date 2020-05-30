import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { ExamStudentsService } from 'src/app/shared/services/exams/exam-students.service';

@Component({
  selector: 'app-students-add',
  templateUrl: './add.component.html',
})
export class AddComponent extends DialogComponent implements OnInit {
  students$ = null;

  constructor(
    private examStudentsService: ExamStudentsService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      userId: [0, [Validators.required]],
      note: ['', []]
    });
    this.students$ = this.examStudentsService.available(this.data.id);
  }

  ngOnInit(): void {

  }

  submit() {
    this.examStudentsService.create(this.data.id, this.form.value)
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
