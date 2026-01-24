package com.erp.gestao.dto.filterDTO;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class FuncionarioFilterDTO extends PessoaFilterDTO {

    private LocalDate admissao;

    private LocalDate admissaoInicio;

    private LocalDate admissaoFim;

}
