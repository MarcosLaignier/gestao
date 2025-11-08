import {AtivoInativoEnum} from "../../enum/ativo.inativo.enum";

export class PessoaFilterDTO {

  id: number;

  nome: string;

  documento: string;

  nascimento: Date;

  nascimentoInicio: Date;

  nascimentoFim: Date;


  situacao: AtivoInativoEnum;
}
