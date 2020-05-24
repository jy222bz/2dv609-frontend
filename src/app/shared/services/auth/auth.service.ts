import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginInput {
  email: string,
  password: string
}

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient
  ) {

  }

  /**
   * Login user
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
