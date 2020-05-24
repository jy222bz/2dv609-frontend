import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
})
export class ExamComponent implements OnInit {
  exam = null;
  working = false;

  @ViewChild('container', { read: ViewContainerRef, static: true })
  public container: ViewContainerRef;
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.exam = this.route.snapshot.data.exam;
  }

}


