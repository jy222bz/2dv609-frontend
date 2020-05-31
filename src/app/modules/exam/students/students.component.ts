import { Component, OnInit } from '@angular/core';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddComponent } from './components/add/add.component';
import { StudentDeleteComponent } from './components/student/delete/delete.component';
import { ActivatedRoute } from '@angular/router';
import { ExamStudentsService } from 'src/app/shared/services/exams/exam-students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent extends ItemsComponent<any> implements OnInit {
  columns = ['email', 'name', 'createdAt', 'edit'];
  displayedColumns = ['email', 'name', 'createdAt', 'edit'];
  exam = null;

  constructor(
    private examStudentsService: ExamStudentsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit(): void {
    this.exam = this.route.snapshot.data.exam;
    this.get();
  }

  openAddComponent(): void {
    const ref = this.dialog.open(AddComponent, {
      autoFocus: true, width: '480px', data: this.exam
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.add(result);
      }
    });
  }

  openStudentDeleteComponent(elem: any): void {
    const ref = this.dialog.open(StudentDeleteComponent, { autoFocus: true, width: '480px', data: elem });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.delete(result);
      }
    });
  }

  // ---------------------
  get(): void {
    this.clear();
    this.examStudentsService.get(this.exam.id, {
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


