import {GridColumn} from "../utils/directives/grid.column.decorator";
import {StatusProdutoEnum} from "../enum/status.produto.enum";

export class FuncaoFuncionario{

  id: number;

  @GridColumn({ label: 'Função', type: 'texto', ordem: 1 })
  descricao: string;

  @GridColumn({ label: 'Acesso Painel Gestor', type: 'boolean', ordem: 2, width:'180px' })
  acessoPainelGestor: boolean;

  versao: number;

}
