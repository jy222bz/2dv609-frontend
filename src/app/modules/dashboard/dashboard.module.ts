import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/shared/modules/card/card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExamsComponent } from './components/exams/exams.component';
import {MatCardModule} from '@angular/material/card';
import { OverviewComponent } from './components/overview/overview.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [
    DashboardComponent,
    OverviewComponent,
    ExamsComponent,
  ],
  providers: [

  ]
})
export class DashboardModule {
}
