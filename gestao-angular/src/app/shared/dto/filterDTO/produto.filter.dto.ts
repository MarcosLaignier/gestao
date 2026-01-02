import {AtivoInativoEnum} from "../../enum/ativo.inativo.enum";
import {TipoPessoaEnum} from "../../enum/tipo.pessoa.enum";
import {GridColumn} from "../../utils/directives/grid.column.decorator";
import {StatusProdutoEnum} from "../../enum/status.produto.enum";

export class PessoaFilterDTO {

  id: number;

  nome: string;

  codigoPatrimonio: string;

  modelo: string;

  valorDiaria: number;

  valorDiariaInicio: number;

  valorDiariaFim: number;

  statusAtual: StatusProdutoEnum;

  dataAquisicao: Date;

  dataAquisicaoInicio: Date;

  dataAquisicaoFim: Date;


}
