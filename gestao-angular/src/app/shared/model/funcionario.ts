import {FuncionarioPapel} from "./funcionario.papel";
import {PessoaPapel} from "./pessoa.papel";
import {GridColumn} from "../utils/directives/grid.column.decorator";

export class Funcionario extends PessoaPapel{

  @GridColumn({label: 'Admissão', type: 'date', ordem: 7})
  dataAdmissao: Date;

  funcionarioPapelList: FuncionarioPapel[];
}
