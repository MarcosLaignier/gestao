import {HttpClient, HttpResponse} from "@angular/common/http";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {Pessoa} from "../model/pessoa";
import {Injectable} from "@angular/core";
import {PessoaFilterDTO} from "../dto/filterDTO/pessoa.filter.dto";
import {Empresa} from "../model/empresa";
import {EmpresaFilterDTO} from "../dto/filterDTO/empresa.filter.dto";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class EmpresaService extends CrudServicePadrao<Empresa,EmpresaFilterDTO> {


  constructor(http: HttpClient) {
    super(http, 'empresa');
  }

  filtrar(pessoaFilterDTO: PessoaFilterDTO) {
    return this.http.post(`${this.url}`, pessoaFilterDTO, {observe: 'response'})
  }

  getEmpresa(): Observable<HttpResponse<Empresa>> {
    return this.http.get<Empresa>(`${this.url}/padrao`, { observe: 'response' });
  }

}
