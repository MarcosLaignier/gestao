import {Produto} from "../../model/produto";
import {Pessoa} from "../../model/pessoa";

export class ReservaFilterDto {
  id: number;
  locatario: Pessoa;
  produto: Produto;
  dataReserva: Date;
  quantidadeDeDias: number;
  previsaoDeEntrega: Date;
  quantidadeLocada: number;
  estorno: boolean = false;
  quantidadeEstornada: number;
  dataEstorno: Date;
  estornoCompleto: boolean = false;
  versao: number;
}

