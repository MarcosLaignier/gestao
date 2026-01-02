package com.erp.gestao.dto.filterDTO;

import com.erp.gestao.enums.StatusProdutoEnum;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
public class ProdutoFilterDTO {

    private Integer id;

    private String nome;

    private String codigoPatrimonio;

    private String modelo;

    private BigDecimal valorDiaria;

    private BigDecimal valorDiariaInicio;

    private BigDecimal valorDiariaFim;

    private StatusProdutoEnum statusAtual;

    private LocalDate dataAquisicao;

    private LocalDate dataAquisicaoInicio;

    private LocalDate dataAquisicaoFim;

}
