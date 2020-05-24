import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { UserService } from 'src/app/shared/services/users/user.service';

@Component({
  selector: 'app-users-user-delete',
  templateUrl: './delete.component.html',
  providers: [UserService]
})
export class UserDeleteComponent extends DialogComponent {
  constructor(
    private userService: UserService,
    private dialog: MatDialogRef<UserDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);
  }

  submit() {
    this.userService.delete(this.data.id)
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
