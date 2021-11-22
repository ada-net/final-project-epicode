import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {

  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTY3NywiZXhwIjoxNjM3MjQzNjc3fQ.99dT3WmLLsm-916j-w0Y7erCDfs4P5tkD7Lbg9ZieLj07RUtf4RzwEyvNVi_CCfJWJF_wHsUwQuyirXNc0B_mg';
  tenantID = 'fe_0421';

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {
        headers: request.headers.set("Authorization", 'Bearer ' + this.bearerAuth)
          .set("X-TENANT-ID", this.tenantID)
      })


    return next.handle(myRequest);
  }
}
