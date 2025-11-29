import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {AlertService} from "../../components-commons/alert-component/alert.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(

      tap({
        next: (event) => {
          if (event instanceof HttpResponse && req.method !== 'GET') {
            this.alertService.show('success', 'Operação realizada com sucesso!');
          }
        },

        error: (error: HttpErrorResponse) => {
          const rawMessage =
            error?.error?.message ||
            error?.message ||
            'Erro desconhecido.';

          let message = rawMessage;

          if (typeof rawMessage === 'string' && rawMessage.includes('!,')) {
            message = rawMessage
              .replace('[', '')
              .replace(']', '')
              .split(',')
              .map(m => m.trim())
              .join('<br>'); // <-- usar <br> permite quebrar linha no innerHTML
          }

          this.alertService.show('error', message);
        }

      })

    );
  }
}
