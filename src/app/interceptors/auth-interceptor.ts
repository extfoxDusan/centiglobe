import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '../modules/authorization/services/authorization.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthorizationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const jwtToken =
      this.auth.currentUser !== null
        ? this.auth.currentUser.signInUserSession?.accessToken.jwtToken
        : '';

    if (jwtToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwtToken}`),
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
