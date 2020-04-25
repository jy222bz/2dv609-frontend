import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleSidebarAction } from 'src/app/store/sidebar/sidebar.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private store: Store) {

  }

  ngOnInit(): void {

  }

  navbarToggle() {
    this.store.dispatch(new ToggleSidebarAction());
  }
}


