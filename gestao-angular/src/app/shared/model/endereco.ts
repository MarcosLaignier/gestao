import {Pessoa} from "./pessoa";
import {Cidade} from "./cidade";

export class Endereco {

  id: number;

  pessoa: Pessoa;

  cidade: Cidade;

  logradouro: string;

  numero: string;

  complemento: string;

  bairro: string;

  cep: string;

  pontoReferencia: string;

  versao: number;
}
