import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleSidebarAction, ShowSidebarAction, HideSidebarAction } from 'src/app/store/sidebar/sidebar.actions';
import { Store, Select } from '@ngxs/store';
import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { SidebarState } from 'src/app/store/sidebar/sidebar.state';
import { AuthState } from 'src/app/store/auth/auth.state';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  smallLayout = false;

  @Select(SidebarState.status) sidebarStatus$: Observable<boolean>;
  @Select(AuthState.role) authRole$: Observable<string>;

  constructor(
    private router: Router,
    private store: Store,
    private breakpointObserver: BreakpointObserver,
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


  navigate(url: string, extras?): void {
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


