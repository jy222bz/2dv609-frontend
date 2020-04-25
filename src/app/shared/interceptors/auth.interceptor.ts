import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {CookiesService} from '../services/cookies.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookiesService: CookiesService) {

  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.cookiesService.get(environment.tokenName);
    if (token) {
      const customReq = request.clone({
        headers: request.headers.set(environment.tokenName, token)
      });
      return next.handle(customReq);
    }
    return next.handle(request);
  }
}
