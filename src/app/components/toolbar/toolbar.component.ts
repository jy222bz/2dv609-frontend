import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleSidebarAction } from 'src/app/store/sidebar/sidebar.actions';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Logout } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }

  navbarToggle(): void {
    this.store.dispatch(new ToggleSidebarAction());
  }

  logout(): void {
    this.store.dispatch(new Logout).subscribe(
      (_next) => {
        this.router.navigate(['/auth/login']);
      }
    )
  }
}


