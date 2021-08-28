import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AllInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = request.headers.set("Authorization",
    this.auth.getTokenInfo()?.token_type+" " + this.auth.getTokenInfo()?.access_token);
    const newRequest = request.clone({
        headers
    });
    return next.handle(newRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        if (err.status === 401) {
          alert("Error : " + err.statusText)
          this.router.navigateByUrl('/login');
        }

        return throwError( err );

      })
    );
  }
}
