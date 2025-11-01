import {AtivoInativoEnum} from "../enum/ativo.inativo.enum";

export class Pessoa{

  id: number;

  nome: string;

  documento: string;

  nascimento: Date;

  situacao: AtivoInativoEnum;

  versao: number;

}
