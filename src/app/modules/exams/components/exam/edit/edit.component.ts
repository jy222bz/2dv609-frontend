import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ExamService } from 'src/app/shared/services/exams/exam.service';

@Component({
  selector: 'app-exams-exam-edit',
  templateUrl: './edit.component.html',
  providers: [ExamService]
})
export class ExamEditComponent extends DialogComponent implements OnInit {
  roles$ = null;

  constructor(
    private examService: ExamService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<ExamEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);
    this.form = this.fb.group({
      title: [data.title, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      courseCode: [data.courseCode, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      startAt: [data.startAt, [Validators.required]],
      endAt: [data.endAt, [Validators.required]],
      credits: [data.credits, [Validators.required]],
      note: [data.note, []]
    });
  }

  ngOnInit(): void {

  }

  getRoles() {

  }

  submit() {
    this.examService.update(this.data.id, this.form.value)
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
