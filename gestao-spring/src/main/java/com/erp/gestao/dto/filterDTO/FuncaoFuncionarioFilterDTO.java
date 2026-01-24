package com.erp.gestao.dto.filterDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FuncaoFuncionarioFilterDTO {

    private Integer id;

    private String descricao;

    private boolean acessoPainelGestor;
}
