package com.erp.gestao.dto.filterDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmpresaFilterDTO extends PessoaFilterDTO {

    private String nomeFantasia;

    private String razaoSocial;

    private String inscricaoEstadual;

}
