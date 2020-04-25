import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { CounterModule } from '../counter/counter.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CounterModule,
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule {
}
