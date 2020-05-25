import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class ExamQuestionChoicesService {
  path = 'exams';
  subPath = 'questions';
  subSubPath = 'choices';

  constructor(private http: HttpClient) {

  }

  get(examId: number, questionId: number, args?: any) {
    return this.http.get<any>(`${this.path}/${examId}/${this.subPath}/${questionId}/${this.subSubPath}`, {
      params: new HttpParams({ fromObject: args })
    });
  }

  create(examId: number, questionId: number, body: any) {
    return this.http.post(`${this.path}/${examId}/${this.subPath}/${questionId}/${this.subSubPath}`, body);
  }

  total(examId: number, questionId: number, args?: any) {
    return this.http.get<any>(`${this.path}/${examId}/${this.subPath}/${questionId}/${this.subSubPath}/count`, {
      params: new HttpParams({ fromObject: args })
    });
  }
}
