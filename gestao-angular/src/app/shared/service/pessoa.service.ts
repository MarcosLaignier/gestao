import {HttpClient} from "@angular/common/http";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {Pessoa} from "../model/pessoa";
import {Injectable} from "@angular/core";

@Injectable()
export class PessoaService extends CrudServicePadrao<Pessoa,any> {


  constructor(http: HttpClient) {
    super(http, 'pessoa');
  }

}
