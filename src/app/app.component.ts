import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { LoaderState } from './store/loader/loader.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Select(LoaderState.status) loaderStatus$: Observable<boolean>;

  constructor(
    private store: Store,
    public authService: AuthService,

    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }





}
