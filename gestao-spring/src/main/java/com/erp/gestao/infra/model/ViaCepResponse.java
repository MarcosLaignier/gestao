package com.erp.gestao.infra.model;

import lombok.Data;

@Data
public class ViaCepResponse {
    private String cep;

    private String logradouro;

    private String complemento;

    private String bairro;

    private String localidade;

    private String uf;

    private String estado;


    private String regiao;


    private String ibge;

    private String ddd;

    private Boolean erro;
}
