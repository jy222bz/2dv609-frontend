import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import LoginInput from './login.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private user = null;

  constructor(
    private http: HttpClient
  ) {
    this.fetchUser().subscribe(
      (next) => {
        this.user = next;
      }
    );
  }

  fetchUser() {
    return this.http.get('account');
  }

  get currentUser() {
    return this.user;
  }

  set currentUser(user: any) {
    this.user = user;
  }

  isAdmin(): boolean {
    return this.user && this.user.role === 1;
  }

  isTeacher(): boolean {
    return this.user && this.user.role === 2;
  }

  /**
   * Login user
   * @param input
   */
  login(input: LoginInput): Observable<any> {
    const httpOptions = {
      withCredentials: true,
    };
    return this.http.post('login', input, httpOptions);
  }

  /**
   * Logout current user
   */
  logout(): Observable<any> {
    const httpOptions = {
      withCredentials: true,
    };
    return this.http.put('logout', {}, httpOptions)
  }
}
