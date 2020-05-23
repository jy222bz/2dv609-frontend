import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddComponent } from './components/add/add.component';
import { UserDeleteComponent } from './components/user/delete/delete.component';
import { UserEditComponent } from './components/user/edit/edit.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent extends ItemsComponent<any> implements OnInit {
  columns = ['name', 'role', 'createdAt', 'edit'];
  displayedColumns = ['name', 'role', 'createdAt', 'edit'];

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
    this.get();
  }

  openAddComponent(): void {
    const ref = this.dialog.open(AddComponent, {
      autoFocus: true, width: '480px'
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.add(result);
      }
    });
  }

  openUserDeleteComponent(elem: any): void {
    const ref = this.dialog.open(UserDeleteComponent, { autoFocus: true, width: '480px', data: elem });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.delete(result);
      }
    });
  }

  openUserEditComponent(elem: any): void {
    const ref = this.dialog.open(UserEditComponent, { autoFocus: true, width: '480px', data: elem });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.update(result);
      }
    });
  }

  // ---------------------
  get(): void {
    this.clear();
    this.usersService.get({
      filterValue: this.filterValue,
      sortOrder: this.sortOrder,
      sortBy: this.sortBy,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    })
      .subscribe(
        (data) => {
          this.set(data);
        },
        (error) => {
          this.snackBar.open((error.status === 0) ? error.message : error.error, null, {
            duration: 3000,
          });
        }
      );
  }
}


