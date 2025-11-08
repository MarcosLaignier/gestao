import {HttpClient} from "@angular/common/http";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {Pessoa} from "../model/pessoa";
import {Injectable} from "@angular/core";
import {PessoaFilterDTO} from "../dto/filterDTO/pessoa.filter.dto";

@Injectable()
export class PessoaService extends CrudServicePadrao<Pessoa,PessoaFilterDTO> {


  constructor(http: HttpClient) {
    super(http, 'pessoa');
  }

  filtrar(pessoaFilterDTO: PessoaFilterDTO) {
    return this.http.post(`${this.url}`, pessoaFilterDTO, {observe: 'response'})
  }

}
