import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  user = null;

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

  isAdmin() {
    return this.user && this.user.admin === 1;
  }
}
