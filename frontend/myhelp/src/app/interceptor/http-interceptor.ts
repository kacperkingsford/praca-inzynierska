import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {SpinnerService} from "../service/spinner.service";


@Injectable()
export class SpinnerHttpInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.show();
    if(localStorage.getItem("accessToken") != null) {
      req = this.addAccessTokenToRequest(req, localStorage.getItem("accessToken"))
    }
// TODO: handle unauthorized requests (401)
    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinnerService.hide();
        }
      }, (error) => {
        this.spinnerService.hide();
      }));
  }

  private addAccessTokenToRequest(request: HttpRequest<any>, token: string | null) {
    return request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });
  }
}
