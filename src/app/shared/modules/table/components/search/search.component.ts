import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('toggleHeight', [
      state('false', style({
        height: '0px',
        opacity: '0',
        overflow: 'hidden',
        // display: 'none'
      })),
      state('true', style({
        height: '*',
        opacity: '1',
        // display: 'block'
      })),
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('100ms ease-out'))
    ])
  ],
})
export class SearchComponent {
  _visible = false;

  @ViewChild('input', { static: false }) input: ElementRef;

  @Input()
  set visible(value: boolean) {
    this._visible = value;
    if (value) {
      this.input.nativeElement.focus();
    }
  }

  get visible(): boolean {
    return this._visible;
  }

  @Output() changed = new EventEmitter<string>();
  @Output() closed = new EventEmitter<boolean>();

  onKey(event: any) {
    switch (event.keyCode) {
      case 27:
        this.onClose();
        break;
      default:
        this.changed.emit(event.target.value);
    }
  }

  onClose() {
    this.input.nativeElement.value = '';
    this.closed.emit();
  }
}


