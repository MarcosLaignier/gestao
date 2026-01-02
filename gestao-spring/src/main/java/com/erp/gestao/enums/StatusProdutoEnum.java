package com.erp.gestao.enums;

import com.erp.gestao.utils.enumUtils.EnumType;
import com.erp.gestao.utils.enumUtils.EnumUtils;
import com.fasterxml.jackson.annotation.JsonCreator;

public enum StatusProdutoEnum implements EnumType {

    DISPONIVEL("Disponivel"),
    OCUPADO("Ocupado"),
    MANUTENCAO("Em Manutenção");


    StatusProdutoEnum(String nome){
        this.nome = nome;
    }

    private String nome;

    @Override
    public String getNome() {
        return nome;
    }

    @JsonCreator
    public static StatusProdutoEnum fromValue(String value) {
        return EnumUtils.fromValue(StatusProdutoEnum.class, value);
    }

}
