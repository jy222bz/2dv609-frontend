import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users.routing.module';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';

import { CardModule } from 'src/app/shared/modules/card/card.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    CardModule,
    FlexLayoutModule,
  ],
  declarations: [
    UsersComponent,
  ],
  providers: [

  ]
})
export class UsersModule {
}
