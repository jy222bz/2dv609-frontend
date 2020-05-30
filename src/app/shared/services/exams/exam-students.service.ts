import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class ExamStudentsService {
  path = 'exams';
  subPath = 'students';

  constructor(private http: HttpClient) {

  }

  get(examId: number, args?: any) {
    return this.http.get<any>(`${this.path}/${examId}/${this.subPath}`, {
      params: new HttpParams({ fromObject: args })
    });
  }

  available(examId: number, args?: any) {
    return this.http.get<any>(`${this.path}/${examId}/${this.subPath}/available`, {
      params: new HttpParams({ fromObject: args })
    });
  }

  create(examId: number, body: any) {
    return this.http.post(`${this.path}/${examId}/${this.subPath}`, body);
  }

  delete(examId: number, body: any) {
    return this.http.request('delete', `${this.path}/${examId}/${this.subPath}`, {
      body
    });
  }

  total(examId: number, args?: any) {
    return this.http.get<any>(`${this.path}/${examId}/${this.subPath}/count`, {
      params: new HttpParams({ fromObject: args })
    });
  }
}
