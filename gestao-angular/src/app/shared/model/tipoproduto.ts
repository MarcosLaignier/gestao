import {GridColumn} from "../utils/directives/grid.column.decorator";

export class TipoProduto{

  id: number;

  @GridColumn({ label: 'Nome', type: 'texto', ordem: 2})
  nome: string;

  @GridColumn({ label: 'Codigo', type: 'texto', ordem: 1, width: '200px'  })
  codigo: string;

}
