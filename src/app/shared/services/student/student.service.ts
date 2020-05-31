import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class StudentService {
  path = 'student';

  constructor(private http: HttpClient) {

  }

  getExams(args?: any): Observable<any> {
    console.log(1)
    return this.http.get<any>(`${this.path}/exams`, {
      params: new HttpParams({ fromObject: args })
    });
  }
}
