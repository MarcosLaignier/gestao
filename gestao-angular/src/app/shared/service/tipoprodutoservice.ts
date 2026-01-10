import {Injectable} from "@angular/core";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {Pessoa} from "../model/pessoa";
import {PessoaFilterDTO} from "../dto/filterDTO/pessoa.filter.dto";
import {HttpClient} from "@angular/common/http";
import {TipoProduto} from "../model/tipo.produto";
import {TipoProdutoFilterDTO} from "../dto/filterDTO/tipo.produto.dto";

@Injectable({ providedIn: 'root' })
export class TipoProdutoService extends CrudServicePadrao<TipoProduto,TipoProdutoFilterDTO> {

  constructor(http: HttpClient) {
    super(http, 'tipoProduto');
  }

  filtrar(tipoProdutoFilterDTO: TipoProdutoFilterDTO) {
    return this.http.post(`${this.url}`, tipoProdutoFilterDTO, {observe: 'response'})
  }

}
