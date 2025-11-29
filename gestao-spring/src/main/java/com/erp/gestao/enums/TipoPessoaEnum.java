package com.erp.gestao.enums;

import com.erp.gestao.utils.enumUtils.EnumType;
import com.erp.gestao.utils.enumUtils.EnumUtils;
import com.fasterxml.jackson.annotation.JsonCreator;

public enum TipoPessoaEnum implements EnumType {
    FISICA("Fisica"),
    JURIDICA("Juridica");

    TipoPessoaEnum(String nome){
        this.nome = nome;
    }

    private String nome;

    @Override
    public String getNome() {
        return nome;
    }

    @JsonCreator
    public static TipoPessoaEnum fromValue(String value) {
        return EnumUtils.fromValue(TipoPessoaEnum.class, value);
    }
}
