import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { ExamsService } from 'src/app/shared/services/exams/exams.service';

@Component({
  selector: 'app-exams-add',
  templateUrl: './add.component.html',
})
export class AddComponent extends DialogComponent implements OnInit {
  roles$ = null;

  constructor(
    private examsService: ExamsService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      courseCode: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      startAt: ['', [Validators.required]],
      endAt: ['', [Validators.required]],
      credits: [0, [Validators.required]],
      note: ['', []]
    });
  }

  ngOnInit(): void {

  }

  getRoles() {

  }

  submit() {
    this.examsService.create(this.form.value)
      .subscribe(
        (data) => {
          this.working = false;
          this.dialog.close(data);
        },
        (error) => {
          console.log(error.error.description)
          this.error = error.error.description;
          this.working = false;
        }
      );
  }
}
