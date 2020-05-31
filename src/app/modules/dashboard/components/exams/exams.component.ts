import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student/student.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard-exams',
  templateUrl: './exams.component.html',
  providers: [StudentService]
})
export class ExamsComponent implements OnInit {
  exams$ = null;

  constructor(
    private studentService: StudentService
  ) {
    this.exams$ = this.studentService.getExams({
      pageIndex: 0,
      pageSize: 100
    }).pipe(map(x => x.content));
  }


  ngOnInit(): void {

  }


}

