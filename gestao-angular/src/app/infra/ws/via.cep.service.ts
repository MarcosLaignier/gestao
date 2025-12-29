import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ViaCepResponse} from "../model/via.cep.response";
import {environment} from "../../enviroment";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class ViaCepService {

  private url = `${environment.BASE_URL}api/cep`;

  constructor(private http: HttpClient) {}

  buscarCep(cep: string): Observable<ViaCepResponse> {
    const cepLimpo = cep?.replace(/\D/g, '');

    return this.http.get<ViaCepResponse>(`${this.url}/${cepLimpo}`);
  }

}
