import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users.routing.module';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';

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
import { AddComponent } from './components/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';
import { MatSelectModule } from '@angular/material/select';
import { UserDeleteComponent } from './components/user/delete/delete.component';
import { UserEditComponent } from './components/user/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
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
  ],
  declarations: [
    UsersComponent,
    AddComponent,
    UserDeleteComponent,
    UserEditComponent,
  ],
  providers: [
    UsersService,
  ]
})
export class UsersModule {
}
