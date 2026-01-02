import {HttpClient} from "@angular/common/http";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {Injectable} from "@angular/core";
import {Produto} from "../model/produto";
import {ProdutoFilterDTO} from "../dto/filterDTO/produto.filter.dto";

@Injectable({ providedIn: 'root' })
export class ProdutoService extends CrudServicePadrao<Produto,ProdutoFilterDTO> {


  constructor(http: HttpClient) {
    super(http, 'produto');
  }

  filtrar(filterDTO: ProdutoFilterDTO) {
    return this.http.post(`${this.url}`, filterDTO, {observe: 'response'})
  }

}
