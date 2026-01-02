import {AtivoInativoEnum} from "../enum/ativo.inativo.enum";
import {TipoPessoaEnum} from "../enum/tipo.pessoa.enum";
import {Endereco} from "./endereco";
import {Telefone} from "./telefone";
import {SexoEnum} from "../enum/sexo.enum";
import {GridColumn} from "../utils/directives/grid.column.decorator";
import {Pessoa} from "./pessoa";

export class Empresa extends Pessoa{

  nomeFantasia: string;

  inscricaoEstadual: string;

  logotipoPath: string;

}
