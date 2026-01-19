import {HttpErrorResponse, HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {inject} from '@angular/core';
import {tap} from 'rxjs';
import {AlertService} from "../../components-commons/infra/alert-component/alert.service";

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
        console.log(error.error?.messages);

        let message: string;

        // Padrao da nossa API (Uma lista de msg)
        if (Array.isArray(error.error?.messages)) {
          message = error.error.messages.join('<br>');
        }
        // Caso venha uma msg normal somente string
        else if (typeof error.error?.message == 'string') {
          message = error.error.message;
        }
        // Se nao vier nada disso so solta um erro desconhecido
        else {
          message = error.message || 'Erro desconhecido, entre em contato.';
        }

        alertService.error(message);
      }

    })
  );
};
