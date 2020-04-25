import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { LoaderState } from './store/loader/loader.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SidebarState } from './store/sidebar/sidebar.state';
import { ToggleSidebarAction, HideSidebarAction, ShowSidebarAction } from './store/sidebar/sidebar.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  smallLayout = false;

  @Select(LoaderState.status) loaderStatus$: Observable<boolean>;
  @Select(SidebarState.status) sidebarStatus$: Observable<boolean>;

  constructor(
    private store: Store,
    public authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.registerBreakpointObserver();
  }

  registerBreakpointObserver() {
    this.breakpointObserver
      .observe(['(min-width: 599.99px)'])
      .subscribe((state: BreakpointState) => {
        this.smallLayout = !state.matches;
      });
  }

  navigate(url: string, extras?) {
    if (this.smallLayout) {
      this.store.dispatch(new ToggleSidebarAction());
    }
    if (extras) {
      this.router.navigate([url, extras]);
    } else {
      this.router.navigate([url]);
    }
  }

  navigateAntiPatterns(url: string, type) {
    this.router.navigate([url], { queryParams: { type } });
  }

  navbarChanged(opened: boolean) {
    this.store.dispatch(opened ? new ShowSidebarAction() : new HideSidebarAction());
  }
}
