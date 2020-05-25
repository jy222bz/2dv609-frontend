import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { ExamQuestionChoicesService } from 'src/app/shared/services/exams/exam-question-choices.service';

@Component({
  selector: 'app-choices-add',
  templateUrl: './add.component.html',
})
export class AddComponent extends DialogComponent implements OnInit {
  roles$ = null;

  constructor(
    private examQuestionChoicesService: ExamQuestionChoicesService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(1)]],
      correct: [true, [Validators.required]],
      note: ['', []]
    });
  }

  ngOnInit(): void {

  }

  getRoles() {

  }

  submit() {
    this.examQuestionChoicesService.create(this.data.examId, this.data.id, this.form.value)
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
