import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {exhaustMap, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.url);
    // this statement is made to exclude sign-in and sign-up requests from being modified
    if (request.url.includes('clients') && !request.url.includes('logout')) {
      return next.handle(request);
    }
    return this.authService.clientSubject.pipe(take(1), exhaustMap(client => {
      if (!client) {
        return next.handle(request);
      }
      const modifiedRequest = request.clone({headers: request.headers.append('Authorization', 'Bearer ' + client.token)});
      return next.handle(modifiedRequest);
    }));
  }
}

