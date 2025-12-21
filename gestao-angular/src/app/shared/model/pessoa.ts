import {AtivoInativoEnum} from "../enum/ativo.inativo.enum";
import {TipoPessoaEnum} from "../enum/tipo.pessoa.enum";
import {Endereco} from "./endereco";
import {Telefone} from "./telefone";
import {SexoEnum} from "../enum/sexo.enum";

export class Pessoa{

  id: number;

  nome: string;

  documento: string;

  email: string;

  nascimento: Date;

  situacao: AtivoInativoEnum;

  tipoPessoa: TipoPessoaEnum;

  sexo: SexoEnum

  telefoneList: Telefone[];

  enderecoList: Endereco[];

  versao: number;

}
