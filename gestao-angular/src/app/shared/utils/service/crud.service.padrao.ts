import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../enviroment";
import {catchError, Observable, throwError} from "rxjs";

export class CrudServicePadrao<T,F> {

  url: string = environment.BASE_URL

  constructor(protected http: HttpClient, private urlPrefix: string) {
    this.url = this.url + urlPrefix;
  }

  getAll() {
    return this.http.get<T[]>(`${this.url}` ,{observe: 'response'})
  }

  getByFiltro(filtro?: F) {
    return this.http.post<T[]>(`${this.url}/listagem`, filtro ?? {}, { observe: 'response' });
  }

  getById(id: number) {
    return this.http.get<T>(`${this.url}/${id}`, {observe: 'response'})
  }

  save(model: T) {
    return this.http.post<T>(`${this.url}`, model, {observe: 'response'}).pipe(
      catchError(error => this.handleError(error))
    );
  }

  update(id: string, model: T) {
    return this.http.put(`${this.url}/${id}`, model , {observe: 'response'})
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}` , {observe: 'response'})
  }

  // Função privada para lidar com o erro
  private handleError(error: HttpErrorResponse): Observable<never> {
      const msg:string = error?.error?.message || error?.message || '';

      const partes: string[] = msg.split(',').map(p => p.trim()).filter(p => p);

     console.log(partes)

    // Sempre retorne um observable de erro para que o consumidor saiba que falhou
    return throwError(() => new Error(''));
  }

}
