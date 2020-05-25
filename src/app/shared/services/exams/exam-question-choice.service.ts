import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExamQuestionChoiceService {
  path = 'exams';
  subPath = 'questions';
  subSubPath = 'choices';

  constructor(private http: HttpClient) {

  }

  update(examId: number, questionId: number, choiceId: number, body: any) {
    return this.http.put(`${this.path}/${examId}/${this.subPath}/${questionId}/${this.subSubPath}/${choiceId}`, body, {});
  }

  delete(examId: number, questionId: number, choiceId: number) {
    return this.http.delete<any>(`${this.path}/${examId}/${this.subPath}/${questionId}/${this.subSubPath}/${choiceId}`, {});
  }
}
