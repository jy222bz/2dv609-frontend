import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Login, Logout } from './auth.actions';
import { tap } from 'rxjs/operators';
import { isUndefined } from 'util';


export interface AuthStateModel {
  email?: string;
  role?: string;
}

@State<AuthStateModel>({
  name: 'auth'
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService) {

  }

  @Selector()
  static userDetails(state: AuthStateModel) {
    return {
      email: state.email,
      role: state.role
    };
  }

  @Selector()
  static role(state: AuthStateModel) {
    return state.role
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel):boolean {
    return !isUndefined(state.role)
  }

  @Action(Login)
  login({ patchState }: StateContext<AuthStateModel>, { payload: { email, password } }: Login) {
    return this.authService.login({
      email: email,
      password: password
    }).pipe(
      tap((result: any) => {
        patchState({ 
          email: result.email,
          role: result.role
         });
      }));
  }

  @Action(Logout)
  logout({ setState }: StateContext<AuthStateModel>) {
    return this.authService.logout().pipe(tap(() => {
      setState({});
    }));
  }
}