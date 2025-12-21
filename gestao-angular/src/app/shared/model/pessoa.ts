import {AtivoInativoEnum} from "../enum/ativo.inativo.enum";
import {TipoPessoaEnum} from "../enum/tipo.pessoa.enum";
import {Endereco} from "./endereco";
import {Telefone} from "./telefone";

export class Pessoa{

  id: number;

  nome: string;

  documento: string;

  nascimento: Date;

  situacao: AtivoInativoEnum;

  tipoPessoa: TipoPessoaEnum;

  telefoneList: Telefone[];

  enderecoList: Endereco[];

  versao: number;

}
