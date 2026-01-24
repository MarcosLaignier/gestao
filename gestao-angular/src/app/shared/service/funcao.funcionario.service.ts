import {HttpClient} from "@angular/common/http";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {Injectable} from "@angular/core";
import {FuncaoFuncionario} from "../model/funcao.funcionario";
import {FuncaoFuncionarioFilterDTO} from "../dto/filterDTO/funcao.funcionario.filter.dto";

@Injectable({ providedIn: 'root' })
export class FuncaoFuncionarioService extends CrudServicePadrao<FuncaoFuncionario,FuncaoFuncionarioFilterDTO> {


  constructor(http: HttpClient) {
    super(http, 'funcao-funcionario');
  }

  filtrar(filterDTO: FuncaoFuncionarioFilterDTO) {
    return this.http.post(`${this.url}`, filterDTO, {observe: 'response'})
  }

}
