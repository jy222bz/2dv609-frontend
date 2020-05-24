import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { RolesService } from 'src/app/shared/services/roles/roles.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { UserService } from 'src/app/shared/services/users/user.service';

@Component({
  selector: 'app-users-user-edit',
  templateUrl: './edit.component.html',
  providers: [RolesService, UserService]
})
export class UserEditComponent extends DialogComponent implements OnInit {
  roles$ = null;

  constructor(
    private userService: UserService,
    private rolesService: RolesService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      email: [data.email, [Validators.required, Validators.minLength(3), Validators.maxLength(255), Validators.email]],
      firstName: [data.firstName, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      lastName: [data.lastName, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      roleId: [data.roleId, [Validators.required]],
      note: [data.note, []]
    });
    this.roles$ = this.rolesService.get({
      pageIndex: 0,
      pageSize: 50
    });
  }

  ngOnInit(): void {

  }

  submit() {
    this.userService.update(this.data.id, this.form.value)
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
