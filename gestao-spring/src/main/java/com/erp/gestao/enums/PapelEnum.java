package com.erp.gestao.enums;

import com.erp.gestao.utils.enumUtils.EnumType;
import com.erp.gestao.utils.enumUtils.EnumUtils;
import com.fasterxml.jackson.annotation.JsonCreator;

public enum PapelEnum implements EnumType {
    EMPRESA("Empresa"),
    FUNCIONARIO("Funcionario"),
    CLIENTE("Cliente");

    PapelEnum(String nome){
        this.nome = nome;
    }

    private String nome;

    @Override
    public String getNome() {
        return nome;
    }

    @JsonCreator
    public static PapelEnum fromValue(String value) {
        return EnumUtils.fromValue(PapelEnum.class, value);
    }
}