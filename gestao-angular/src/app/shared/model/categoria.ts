import {GridColumn} from "../utils/directives/grid.column.decorator";

export class Categoria{

  @GridColumn({ label: 'Codigo', type: 'number', ordem: 1, width: "200px"})
  id: number;

  @GridColumn({ label: 'Nome', type: 'texto', ordem: 2})
  nome: string;

}
