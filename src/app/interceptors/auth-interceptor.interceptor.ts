import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../shared/services/jwt/jwt.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private jwtService: JwtService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interceptor called')

    const headersConfig: {
      Authorization?: string,
    } = {};

    const token = this.jwtService.getJwt();
    headersConfig.Authorization = `Bearer ${token}`;

    return next.handle(request.clone({
      setHeaders: headersConfig,
    }));
  }
}
