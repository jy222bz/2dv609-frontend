import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const excludedRoutes = ['login', 'logout', 'account'];
    if (excludedRoutes.includes(req.url)) {
      return next.handle(req);
    }
    return next.handle(req.clone({ url: `${environment.baseAPI}${req.url}` }));
  }
}
