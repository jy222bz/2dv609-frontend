import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamRoutingModule } from './exam.routing.module';
import { ExamComponent } from './exam.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';
import { CardModule } from 'src/app/shared/modules/card/card.module';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CounterModule } from 'src/app/shared/modules/counter/counter.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExamService } from 'src/app/shared/services/exams/exam.service';

@NgModule({
  imports: [
    ExamRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    AlertModule,
    CounterModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule,
    MatChipsModule,
    MatTooltipModule,
  ],
  declarations: [
    ExamComponent,
    OverviewComponent,
  ],
  providers: [
    ExamService,
  ],
  entryComponents: []
})

export class ExamModule {
}
