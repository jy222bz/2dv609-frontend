import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() footer: string;

  @Input() loading = true;

  @Input() url: string;

  @Input() value = 0;

  @Input() icon = '';

  @Input() title = '';

  constructor(
    private router: Router,
  ) {


  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  navigate() {
    if (this.url !== '') {
      this.router.navigate([this.url]);
    }
  }
}


