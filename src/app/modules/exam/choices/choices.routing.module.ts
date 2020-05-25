import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChoicesComponent } from './choices.component';

const routes: Routes = [
  { path: '', component: ChoicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoicesRoutingModule {
}
