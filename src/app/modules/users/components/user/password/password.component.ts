import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { UserService } from 'src/app/shared/services/users/user.service';

@Component({
  selector: 'app-users-user-password',
  templateUrl: './password.component.html',
  providers: [UserService]
})
export class UserPasswordComponent extends DialogComponent implements OnInit {
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<UserPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    });
  }

  ngOnInit(): void {

  }

  submit() {
    this.userService.password(this.data.id, this.form.value)
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
