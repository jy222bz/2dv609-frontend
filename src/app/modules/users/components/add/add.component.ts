import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { RolesService } from 'src/app/shared/services/roles/roles.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './add.component.html',
  providers: [RolesService]
})
export class AddComponent extends DialogComponent implements OnInit {
  roles$ = null;

  constructor(
    private usersService: UsersService,
    private rolesService: RolesService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      roleId: ['', [Validators.required]],
      note: ['', []]
    });
    this.roles$ = this.rolesService.get({
      pageIndex: 0,
      pageSize: 50
    });
  }

  ngOnInit(): void {

  }

  getRoles() {

  }

  submit() {
    this.usersService.create(this.form.value)
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
