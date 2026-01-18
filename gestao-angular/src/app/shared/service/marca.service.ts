import {Injectable} from "@angular/core";
import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {HttpClient} from "@angular/common/http";
import {Marca} from "../model/marca";
import {MarcaFilterDTO} from "../dto/filterDTO/marca.filter.dto";

@Injectable({ providedIn: 'root' })
export class MarcaService extends CrudServicePadrao<Marca,MarcaFilterDTO> {

  constructor(http: HttpClient) {
    super(http, 'marca');
  }

}
