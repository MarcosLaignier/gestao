import {PessoaFilterDTO} from "./pessoa.filter.dto";

export class FuncionarioFilterDTO extends PessoaFilterDTO{

  admissao: Date;

  admissaoInicio: Date;

  admissaoFim: Date;

}
