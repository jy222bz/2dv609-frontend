import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ExamsService {
  path = 'exams';

  constructor(private http: HttpClient) {

  }

  get(args?: any): Observable<any> {
    return this.http.get<any>(this.path, {
      params: new HttpParams({ fromObject: args })
    });
  }

  create(body: any): Observable<any> {
    return this.http.post(this.path, body);
  }

  delete(body: any): Observable<any> {
    return this.http.request('delete', this.path, {
      body
    });
  }
}
