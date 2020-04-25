import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeAnimation =
    trigger('fadeAnimation', [
      state('initial', style({
        opacity: '1'
      })),
      state('final', style({
        opacity: '0'
      })),
      transition('initial => final', animate('200ms ease-in')),
      transition('final => initial', animate('200ms ease-out'))
    ]);
