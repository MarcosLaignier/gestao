import {Pessoa} from "./pessoa";
import {FuncionarioPapel} from "./funcionario.papel";

export class Funcionario extends Pessoa{

  admissao: Date;

  funcionarioPapelList: FuncionarioPapel[];
}
