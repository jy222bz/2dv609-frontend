import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
  ],
  imports: [

  ],
  exports: [
    HeaderComponent,
    SearchComponent,
  ]
})
export class TableModule {
}
