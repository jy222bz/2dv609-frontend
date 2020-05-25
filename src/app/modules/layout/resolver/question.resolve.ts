import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionResolve implements Resolve<any> {
  constructor(private http: HttpClient,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.http.get(`exams/${route.params.examId}/questions/${route.params.questionId}`);
  }
}
