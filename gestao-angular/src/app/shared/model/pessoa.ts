import {AtivoInativoEnum} from "../enum/ativo.inativo.enum";
import {TipoPessoaEnum} from "../enum/tipo.pessoa.enum";
import {Endereco} from "./endereco";
import {Telefone} from "./telefone";
import {SexoEnum} from "../enum/sexo.enum";
import {GridColumn} from "../utils/directives/grid.column.decorator";

export class Pessoa{

  id: number;

  @GridColumn({ label: 'Nome', type: 'text', order: 1 })
  nome: string;

  @GridColumn({ label: 'Documento', type: 'cpf', order: 2 })
  documento: string;

  email: string;

  @GridColumn({ label: 'Nascimento', type: 'date', order: 3 })
  nascimento: Date;

  @GridColumn({ label: 'Situação', type: 'enum', order: 6 })
  situacao: AtivoInativoEnum;

  @GridColumn({ label: 'Tipo', type: 'text', order: 4 })
  tipoPessoa: TipoPessoaEnum;

  @GridColumn({ label: 'Sexo', type: 'enum', order: 5 })
  sexo: SexoEnum

  telefoneList: Telefone[];

  enderecoList: Endereco[];

  versao: number;

}
