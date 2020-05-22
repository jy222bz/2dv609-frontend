import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import LoginInput from './login.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient
  ) {

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
