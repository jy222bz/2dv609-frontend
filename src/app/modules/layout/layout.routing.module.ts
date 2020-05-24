import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ExamResolve } from './resolver/exam.resolve';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'exams',
        loadChildren: () => import('../exams/exams.module').then(m => m.ExamsModule)
      },
      {
        path: 'exams/:id',
        loadChildren: () => import('../exam/exam.module').then(m => m.ExamModule),
        resolve: {
          exam: ExamResolve
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
