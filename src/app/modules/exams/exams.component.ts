import { Component, OnInit } from '@angular/core';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExamsService } from 'src/app/shared/services/exams/exams.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
})
export class ExamsComponent extends ItemsComponent<any> implements OnInit {
  columns = ['title', 'courseCode', 'createdAt', 'edit'];
  displayedColumns = ['title', 'courseCode', 'createdAt', 'edit'];

  constructor(
    private examsService: ExamsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
    this.get();
  }

  openAddComponent(): void {

  }

  openExamDeleteComponent(elem: any): void {

  }

  openExamEditComponent(elem: any): void {

  }

  // ---------------------
  get(): void {
    this.clear();
    this.examsService.get({
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


