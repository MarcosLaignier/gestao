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
