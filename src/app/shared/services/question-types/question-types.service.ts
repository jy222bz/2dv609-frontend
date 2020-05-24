import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class QuestionTypesService {
  path = 'question_types';

  constructor(private http: HttpClient) {

  }

  get(): Observable<any> {
    return this.http.get<any>(this.path);
  }
}
