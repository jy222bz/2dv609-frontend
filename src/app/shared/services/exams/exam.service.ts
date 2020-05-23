import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExamService {
  path = 'exams';

  constructor(private http: HttpClient) {

  }

  get(id: number) {
    return this.http.get<any>(`${this.path}/${id}`);
  }

  update(id: number, body: any): Observable<any> {
    return this.http.put(`${this.path}/${id}`, body, {});
  }

  delete(id: number) {
    return this.http.delete<any>(`${this.path}/${id}`, {});
  }
}
