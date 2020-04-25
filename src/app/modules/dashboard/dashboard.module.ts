import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';

import { CardModule } from 'src/app/shared/modules/card/card.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    FlexLayoutModule,
  ],
  declarations: [
    DashboardComponent,
    OverviewComponent,
  ],
  providers: [

  ]
})
export class DashboardModule {
}
