import { Component, OnInit } from '@angular/core';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddComponent } from './components/add/add.component';
import { QuestionDeleteComponent } from './components/question/delete/delete.component';
import { QuestionEditComponent } from './components/question/edit/edit.component';
import { ExamQuestionsService } from 'src/app/shared/services/exams/exam-questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent extends ItemsComponent<any> implements OnInit {
  columns = ['text', 'type', 'createdAt', 'edit'];
  displayedColumns = ['text', 'type', 'createdAt', 'edit'];
  exam = null;

  constructor(
    private examQuestionsService: ExamQuestionsService,
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

  openQuestionDeleteComponent(elem: any): void {
    const ref = this.dialog.open(QuestionDeleteComponent, { autoFocus: true, width: '480px', data: elem });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.delete(result);
      }
    });
  }

  openQuestionEditComponent(elem: any): void {
    const ref = this.dialog.open(QuestionEditComponent, { autoFocus: true, width: '480px', data: elem });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.update(result);
      }
    });
  }

  // ---------------------
  get(): void {
    this.clear();
    this.examQuestionsService.get(this.exam.id, {
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


