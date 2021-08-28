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
        console.log(this.router.url);
        if(err.status != 0) {
          if (err.status === 401 || err.error.message === 'token.not-found') {
            this.auth.clearSession();
            if(this.router.url === '/login') {
              alert("Error : User or password wrong")
            } else {
              alert("Error : Session expired")
            }
            window.stop();
            this.router.navigateByUrl('/login');
          }else {
            alert("An error has occured!")
          }
        }

        return throwError( err );

      })
    );
  }
}
