import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExamResolve implements Resolve<any> {
  constructor(private http: HttpClient,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.http.get(`exams/${route.params.id}`);
  }
}
