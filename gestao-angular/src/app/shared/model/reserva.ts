import {Pessoa} from "./pessoa";
import {Produto} from "./produto";
import {GridColumn} from "../utils/directives/grid.column.decorator";

export class Reserva {
  @GridColumn({label: 'N da Reserva', type: 'number', ordem: 1})
  id: number;

  @GridColumn({label: 'Locatário', type: 'texto', ordem: 2, isObject: true, displayProperty: 'nome'})
  locatario: Pessoa;

  @GridColumn({label: 'Produto', type: 'texto', ordem: 3, isObject: true, displayProperty: 'nome'})
  produto: Produto;

  @GridColumn({label: 'Início da Reserva', type: 'date', ordem: 4})
  dataReserva: Date;

  quantidadeDeDias: number;

  @GridColumn({label: 'Previsão de Entrega', type: 'date', ordem: 5})
  previsaoDeEntrega: Date;

  quantidadeLocada: number;
  estorno: boolean = false;
  quantidadeEstornada: number;
  dataEstorno: Date;
  estornoCompleto: boolean = false;
  versao: number;
}
