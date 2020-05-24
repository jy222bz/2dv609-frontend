import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExamStudentService {
  path = 'exams';
  subPath = 'students';

  constructor(private http: HttpClient) {

  }

  update(examId: number, studentId: number, body: any) {
    return this.http.put(`${this.path}/${examId}/${this.subPath}/${studentId}`, body, {});
  }

  delete(examId: number, studentId: number) {
    return this.http.delete<any>(`${this.path}/${examId}/${this.subPath}/${studentId}`, {});
  }
}
