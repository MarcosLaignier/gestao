import {Injectable} from "@angular/core";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {HttpClient} from "@angular/common/http";
import {Marca} from "../model/marca";
import {MarcaFilterDto} from "../dto/filterDTO/marca.filter.dto";

@Injectable({ providedIn: 'root' })
export class MarcaSercice extends CrudServicePadrao<Marca,MarcaFilterDto> {

  constructor(http: HttpClient) {
    super(http, 'marca');
  }

  filtrar(marcaFilterDto: MarcaFilterDto) {
    return this.http.post(`${this.url}`, marcaFilterDto, {observe: 'response'})
  }

}
