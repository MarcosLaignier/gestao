import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../enviroment";

@Injectable({providedIn: 'root'})
export class ArquivoDigitalService {

  url: string = environment.BASE_URL

  constructor(private http: HttpClient) {
  }

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.url}arquivo-digital/upload`, formData);
  }

  download(id: number): Observable<any> {
    return this.http.get(`${this.url}arquivo-digital/download/${id}`, {
      responseType: 'blob',
      observe: 'response'
    }).pipe(
      map(response => {
        return {
          blob: response.body,
          id: response.headers.get('X-Arquivo-Id'),
          nome: response.headers.get('X-Arquivo-Nome'),
          tipo: response.headers.get('X-Arquivo-Tipo'),
          tamanho: response.headers.get('X-Arquivo-Tamanho')
        };
      })
    );
  }
}
