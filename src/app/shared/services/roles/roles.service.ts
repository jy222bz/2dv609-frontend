import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class RolesService {
  path = 'roles';

  constructor(private http: HttpClient) {

  }

  get(args?: any): Observable<any> {
    return this.http.get<any>(this.path, {
      params: new HttpParams({ fromObject: args })
    });
  }
}
