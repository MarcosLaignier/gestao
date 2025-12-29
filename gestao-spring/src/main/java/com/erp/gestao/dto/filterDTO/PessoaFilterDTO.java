package com.erp.gestao.dto.filterDTO;

import com.erp.gestao.enums.AtivoInativoEnum;
import com.erp.gestao.enums.TipoPessoaEnum;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class PessoaFilterDTO {

    private Integer id;

    private String nome;

    private String documento;

    private LocalDate nascimento;

    private LocalDate nascimentoInicio;

    private LocalDate nascimentoFim;

    private AtivoInativoEnum situacao;

    private TipoPessoaEnum tipoPessoa;

}
