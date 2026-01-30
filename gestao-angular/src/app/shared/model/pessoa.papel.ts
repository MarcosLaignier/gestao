import {Pessoa} from "./pessoa";
import {PapelEnum} from "../enum/papel.enum";
import {GridColumn} from "../utils/directives/grid.column.decorator";

export  class PessoaPapel {

  id: number;

  @GridColumn({isObject: true, isExtendsConstructor: true,
    expandColumns: [
      { key: 'nome', label: 'Nome', type: 'texto', ordem: 1 },
      { key: 'documento', label: 'Documento', type: 'documento', ordem: 2 },
      { key: 'nascimento', label: 'Nascimento', type: 'date', ordem: 3 },
      { key: 'tipoPessoa', label: 'Tipo', type: 'texto', ordem: 4 },
      { key: 'sexo', label: 'Sexo', type: 'enum', ordem: 5 },
    ]
  })
  pessoa: Pessoa;

  papel : PapelEnum ;

  ativo: boolean;
}
