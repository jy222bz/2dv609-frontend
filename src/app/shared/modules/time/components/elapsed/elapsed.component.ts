import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-elapsed',
  templateUrl: './elapsed.component.html',
  styleUrls: ['./elapsed.component.scss'],
})
export class TimeElapsedComponent {
  currentValue = 0;
  text = '';

  @Input()
  set value(value: any) {
    this.update(value);
  }

  @Input() autoIncrease = false;

  update(value) {
    this.currentValue = value;
    if (value === 0) {
      this.text = '';
      return;
    }

    const d = Math.floor(value / (3600 * 24));
    const h = Math.floor((value % (3600 * 24)) / 3600);
    const m = Math.floor((value % 3600) / 60);
    const s = value % 60;

    let str = '';
    if (d > 0) {
      str += d + ' days';
    }
    if (h > 0) {
      str += ' ' + h + ' hours';
    }
    if (m > 0) {
      str += ' ' + m + ' minutes';
    }
    if (d === 0 && s > 0) {
      str += ' ' + s + ' seconds';
    }
    this.text = str;
  }
}


