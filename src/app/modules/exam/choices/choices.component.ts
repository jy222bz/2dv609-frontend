import { Component, OnInit } from '@angular/core';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddComponent } from './components/add/add.component';
import { ExamQuestionChoicesService } from 'src/app/shared/services/exams/exam-question-choices.service';
import { ChoiceDeleteComponent } from './components/choice/delete/delete.component';
import { ChoiceEditComponent } from './components/choice/edit/edit.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
})
export class ChoicesComponent extends ItemsComponent<any> implements OnInit {
  columns = ['text', 'correct', 'createdAt', 'edit'];
  displayedColumns = ['text', 'correct', 'createdAt', 'edit'];
  question = null;

  constructor(
    private examQuestionChoicesService: ExamQuestionChoicesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    super();
    this.question = this.route.snapshot.data.question;
  }

  ngOnInit(): void {
    this.get();
  }

  openAddComponent(): void {
    const ref = this.dialog.open(AddComponent, {
      autoFocus: true, width: '480px', data: this.question
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.add(result);
      }
    });
  }

  openChoiceDeleteComponent(elem: any): void {
    const ref = this.dialog.open(ChoiceDeleteComponent, {
      autoFocus: true, width: '480px', data: {
        choice: elem,
        question: this.question
      }
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.delete(result);
      }
    });
  }

  openChoiceEditComponent(elem: any): void {
    const ref = this.dialog.open(ChoiceEditComponent, { autoFocus: true, width: '480px', data: {
      choice: elem,
      question: this.question
    } });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.update(result);
      }
    });
  }

  // ---------------------
  get(): void {
    this.clear();
    this.examQuestionChoicesService.get(this.question.examId, this.question.id, {
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


