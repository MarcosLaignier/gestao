import {Funcionario} from "./funcionario";
import {FuncaoFuncionario} from "./funcao.funcionario";
import {GridColumn} from "../utils/directives/grid.column.decorator";

export class FuncionarioPapel {

  id: number;

  funcionario: Funcionario;

  @GridColumn({isObject: true, isExtendsConstructor: true,
    expandColumns: [
      { key: 'descricao', label: 'Função', type: 'texto', ordem: 1 },
      { key: 'acessoPainelGestor', label: 'Acesso Painel Gestor', type: 'boolean', ordem: 2, width:'180px'  },
    ]
  })
  funcaoFuncionario: FuncaoFuncionario;

  versao: number;

}
