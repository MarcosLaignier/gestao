import {AtivoInativoEnum} from "../enum/ativo.inativo.enum";
import {TipoPessoaEnum} from "../enum/tipo.pessoa.enum";

export class Pessoa{

  id: number;

  nome: string;

  documento: string;

  nascimento: Date;

  situacao: AtivoInativoEnum;

  tipoPessoa: TipoPessoaEnum;

  versao: number;

}
