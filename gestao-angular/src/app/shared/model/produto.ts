import {AtivoInativoEnum} from "../enum/ativo.inativo.enum";
import {TipoPessoaEnum} from "../enum/tipo.pessoa.enum";
import {Endereco} from "./endereco";
import {Telefone} from "./telefone";
import {SexoEnum} from "../enum/sexo.enum";
import {GridColumn} from "../utils/directives/grid.column.decorator";
import {StatusProdutoEnum} from "../enum/status.produto.enum";

export class Produto{

  id: number;

  @GridColumn({ label: 'Nome', type: 'texto', ordem: 2 })
  nome: string;

  @GridColumn({ label: 'Cod Patriminio', type: 'texto', ordem: 1 })
  codigoPatrimonio: string;

  @GridColumn({ label: 'Modelo', type: 'texto', ordem: 3 })
  modelo: string;

  @GridColumn({ label: 'Valor Diaria', type: 'currency', ordem: 4 })
  valorDiaria: number;

  @GridColumn({ label: 'Status Atual', type: 'enum', ordem: 6 })
  statusAtual: StatusProdutoEnum;

  @GridColumn({ label: 'Data Aquisição', type: 'date', ordem: 5 })
  dataAquisicao: Date;

  observacoes: string

  versao: number;

}
