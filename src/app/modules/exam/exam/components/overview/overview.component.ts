import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamQuestionsService } from 'src/app/shared/services/exams/exam-questions.service';
import { ExamStudentsService } from 'src/app/shared/services/exams/exam-students.service';

@Component({
  selector: 'app-exam-overview',
  templateUrl: './overview.component.html',
  providers: [ExamQuestionsService, ExamStudentsService]
})
export class OverviewComponent implements OnInit {
  items = [];
  examId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private examQuestionsService: ExamQuestionsService,
    private examStudentsService: ExamStudentsService,
  ) {
    this.examId = this.activatedRoute.snapshot.params.examId;
    this.addQuestions();
    this.addStudents();
  }

  addQuestions() {
    this.items.push({
      title: 'Questions',
      name: 'questions',
      icon: 'link',
      url: '/exams/' + this.examId + '/questions',
      footer: 'Total',
      loading: false
    });
  }

  addStudents() {
    this.items.push({
      title: 'Students',
      name: 'students',
      icon: 'supervisor_account',
      url: '/exams/' + this.examId + '/students',
      footer: 'Total',
      loading: false
    });
  }


  ngOnInit(): void {
    this.getQuestions();
    this.getStudents();
  }

  getQuestions(): void {
    this.examQuestionsService.total(this.examId).subscribe(
      (data) => {
        const tile = this.items.find(m => m.name === 'questions');
        tile.value = data;
      },
      (error) => {
      }
    );
  }

  getStudents() {
    this.examStudentsService.total(this.examId).subscribe(
      (data) => {
        const tile = this.items.find(m => m.name === 'students');
        tile.value = data;
      },
      (error) => {
      }
    );
  }
}

