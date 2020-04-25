import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { fadeAnimation } from '../../shared/animations/fade-animation';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [fadeAnimation]
})
export class LoaderComponent {
  constructor() {
  }
}


