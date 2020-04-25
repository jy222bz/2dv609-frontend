import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
export class HeaderComponent {
  @Input() visible = false;
}


