import {Pessoa} from "./pessoa";
import {GridColumn} from "../utils/directives/grid.column.decorator";

export class Telefone{

  id: number;

  pessoa: Pessoa;

  @GridColumn({ label: 'Numero', type: 'texto', ordem: 1 })
  numero: string;

  @GridColumn({ label: 'Principal', type: 'boolean', ordem: 2 })
  principal: boolean;

  @GridColumn({ label: 'Notifica', type: 'boolean', ordem: 3 })
  isWhatsappNotifica: boolean;

  versao: number;

}
