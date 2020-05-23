import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users.routing.module';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';

import { CardModule } from 'src/app/shared/modules/card/card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersService } from 'src/app/shared/services/users/users.service';
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

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    CardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    TableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [
    UsersComponent,
  ],
  providers: [
    UsersService,
  ]
})
export class UsersModule {
}
