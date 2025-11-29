import {AtivoInativoEnum} from "../../enum/ativo.inativo.enum";
import {TipoPessoaEnum} from "../../enum/tipo.pessoa.enum";

export class PessoaFilterDTO {

  id: number;

  nome: string;

  documento: string;

  nascimento: Date;

  nascimentoInicio: Date;

  nascimentoFim: Date;

  situacao: AtivoInativoEnum;

  tipoPessoa: TipoPessoaEnum;
}
