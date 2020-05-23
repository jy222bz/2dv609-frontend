import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddComponent } from './components/add/add.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent extends ItemsComponent<any> implements OnInit {
  columns = ['name', 'createdAt', 'edit'];
  displayedColumns = ['name', 'createdAt', 'edit'];

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

  openUserDeleteDialog(elem: any): void {

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


