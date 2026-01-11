import {Injectable} from "@angular/core";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {HttpClient} from "@angular/common/http";
import {Categoria} from "../model/categoria";
import {CategoriaFilterDto} from "../dto/filterDTO/categoria.filter.dto";

@Injectable({ providedIn: 'root' })
export class CategoriaSercice extends CrudServicePadrao<Categoria,CategoriaFilterDto> {

  constructor(http: HttpClient) {
    super(http, 'categoria');
  }

  filtrar(categoriaFilterDto: CategoriaFilterDto) {
    return this.http.post(`${this.url}`, categoriaFilterDto, {observe: 'response'})
  }

}
