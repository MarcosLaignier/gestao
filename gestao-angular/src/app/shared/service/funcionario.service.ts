import {HttpClient} from "@angular/common/http";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {Injectable} from "@angular/core";
import {Funcionario} from "../model/funcionario";
import {FuncionarioFilterDTO} from "../dto/filterDTO/funcionario.filter.dto";

@Injectable({ providedIn: 'root' })
export class FuncionarioService extends CrudServicePadrao<Funcionario,FuncionarioFilterDTO> {


  constructor(http: HttpClient) {
    super(http, 'funcionario');
  }

  filtrar(filterDTO: FuncionarioFilterDTO) {
    return this.http.post(`${this.url}`, filterDTO, {observe: 'response'})
  }

}
