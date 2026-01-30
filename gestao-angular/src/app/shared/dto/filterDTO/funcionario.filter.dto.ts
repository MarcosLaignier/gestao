import {PessoaFilterDTO} from "./pessoa.filter.dto";

export class FuncionarioFilterDTO{

  constructor() {
    this.pessoaFilterDTO = new PessoaFilterDTO();
  }

  pessoaFilterDTO: PessoaFilterDTO;

  admissao: Date;

  admissaoInicio: Date;

  admissaoFim: Date;

}
