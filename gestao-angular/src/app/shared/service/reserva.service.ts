import {CrudServicePadrao} from "../utils/service/crud.service.padrao";
import {Reserva} from "../model/reserva";
import {ReservaFilterDto} from "../dto/filterDTO/reserva.filter.dto";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ReservaService extends CrudServicePadrao<Reserva, ReservaFilterDto>{
  constructor(http: HttpClient) {
    super(http, 'reserva');
  }
}
