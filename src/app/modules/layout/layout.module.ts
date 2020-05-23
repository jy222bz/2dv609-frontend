import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/shared/modules/card/card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from 'src/app/modules/layout/components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CardModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  declarations: [
    LayoutComponent,
    ToolbarComponent,
  ],
  providers: [

  ]
})
export class LayoutModule {
}
