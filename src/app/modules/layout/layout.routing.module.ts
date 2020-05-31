import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ExamResolve } from './resolver/exam.resolve';
import { QuestionResolve } from './resolver/question.resolve';

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
        path: 'exams/:examId',
        loadChildren: () => import('../exam/exam/exam.module').then(m => m.ExamModule),
        resolve: {
          exam: ExamResolve
        }
      },
      {
        path: 'exams/:examId/questions',
        loadChildren: () => import('../exam/questions/questions.module').then(m => m.QuestionsModule),
        resolve: {
          exam: ExamResolve
        }
      },
      {
        path: 'exams/:examId/questions/:questionId/choices',
        loadChildren: () => import('../exam/choices/choices.module').then(m => m.ChoicesModule),
        resolve: {
          question: QuestionResolve
        }
      },
      {
        path: 'exams/:examId/students',
        loadChildren: () => import('../exam/students/students.module').then(m => m.StudentsModule),
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
