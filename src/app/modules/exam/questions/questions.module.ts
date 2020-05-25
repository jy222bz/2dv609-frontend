import { NgModule } from '@angular/core';
import { QuestionsRoutingModule } from './questions.routing.module';
import { QuestionsComponent } from './questions.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableModule } from 'src/app/shared/modules/table/table.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { AddComponent } from './components/add/add.component';
import { QuestionDeleteComponent } from './components/question/delete/delete.component';
import { QuestionEditComponent } from './components/question/edit/edit.component';
import { ExamQuestionsService } from 'src/app/shared/services/exams/exam-questions.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuestionsRoutingModule,
    FlexLayoutModule,
    AlertModule,
    MatTableModule,
    MatPaginatorModule,
    TableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  declarations: [
    QuestionsComponent,
    AddComponent,
    QuestionDeleteComponent,
    QuestionEditComponent,
  ],
  providers: [
    ExamQuestionsService,
  ]
})
export class QuestionsModule {
}
