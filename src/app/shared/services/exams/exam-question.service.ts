import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExamQuestionService {
  path = 'exams';
  subPath = 'questions';

  constructor(private http: HttpClient) {

  }

  update(examId: number, questionId: number, body: any) {
    return this.http.put(`${this.path}/${examId}/${this.subPath}/${questionId}`, body, {});
  }

  delete(examId: number, questionId: number) {
    return this.http.delete<any>(`${this.path}/${examId}/${this.subPath}/${questionId}`, {});
  }
}
