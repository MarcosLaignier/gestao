import { HttpInterceptorFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { AlertService } from '../../components-commons/alert-component/alert.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const alertService = inject(AlertService);

  return next(req).pipe(
    tap({
      next: (event) => {
        if (
          event instanceof HttpResponse &&
          req.method !== 'GET' &&
          !(req.method === 'POST' && req.url.includes('list'))
        ) {
          alertService.show('success', 'Operação realizada com sucesso!');
        }
      },

      error: (error: HttpErrorResponse) => {
        const rawMessage =
          error?.error?.message ||
          error?.message ||
          'Erro desconhecido.';

        let message = rawMessage;

        // Mantendo sua lógica original
        if (typeof rawMessage === 'string' && rawMessage.includes('!,')) {
          message = rawMessage
            .replace('[', '')
            .replace(']', '')
            .split(',')
            .map(m => m.trim())
            .join('<br>');
        }

        alertService.show('error', message);
      }
    })
  );
};
