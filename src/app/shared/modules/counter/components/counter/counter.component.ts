import {Component, Input, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit, OnDestroy {
  start = 0;
  decimal = 0;
  duration = 800;
  currentValue = 0;
  timer = null;
  oldValue = 0;

  @Input()
  set value(value: number) {
    if (value === undefined) {
      return;
    }
    this.animate(this.oldValue, value);
    this.oldValue = value;
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }


  animate(start, end): void {
    const range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    const minTimer = 50;
    // calc step time to show all interediate values
    let stepTime = Math.abs(Math.floor(this.duration / range));

    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);

    // get current time and calculate desired end time
    const startTime = new Date().getTime();
    const endTime = startTime + this.duration;

    const run = () => {
      const now = new Date().getTime();
      const remaining = Math.max((endTime - now) / this.duration, 0);
      const val = Math.round(end - (remaining * range));
      this.currentValue = val;
      if (Math.round(val) === Math.round(end)) {
        clearInterval(this.timer);
      }
    };
    this.timer = setInterval(run, stepTime);
    run();
  }
}


