import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { ShowLoaderAction, HideLoaderAction } from 'src/app/store/loader/loader.actions';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private store: Store) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // disable for selected routes
    if (req.url.endsWith('status')) {
      return next.handle(req);
    }
    Promise.resolve(null).then(() => this.store.dispatch(new ShowLoaderAction()));
    return next.handle(req).pipe(
      finalize(() => this.store.dispatch(new HideLoaderAction()))
    );
  }
}
