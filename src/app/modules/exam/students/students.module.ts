import { NgModule } from '@angular/core';
import { StudentsRoutingModule } from './students.routing.module';
import { StudentsComponent } from './students.component';
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
import { StudentDeleteComponent } from './components/student/delete/delete.component';
import { ExamStudentsService } from 'src/app/shared/services/exams/exam-students.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
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
    StudentsComponent,
    AddComponent,
    StudentDeleteComponent,
  ],
  providers: [
    ExamStudentsService,
  ]
})
export class StudentsModule {
}
