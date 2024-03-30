import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { SessionService } from './session.service';
//import { LoadingService } from './loading.service';
//import { UserContextService } from './user-context.service';
const defaultUser = null
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 public user$: any = new BehaviorSubject(defaultUser);
  constructor(private sessionService:SessionService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var data = this.sessionService.getItem("currentUser");
    if (data != null) {
      this.user$.next(data);
    }
    //this.loadingService.showLoader();
    if (this.user$ && this.user$._value && this.user$._value.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.user$._value.token}`,
        }
      });
    }

    return next.handle(request).pipe(
      finalize(() => "")
    );
  }
}
