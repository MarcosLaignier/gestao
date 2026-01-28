import {Pessoa} from "./pessoa";
import {PapelEnum} from "../enum/papel.enum";

export  class PessoaPapel {

  id: number;

  pessoa: Pessoa;

  papel : PapelEnum ;

  ativo: boolean;
}
