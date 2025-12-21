package com.erp.gestao.enums;

import com.erp.gestao.utils.enumUtils.EnumType;
import com.erp.gestao.utils.enumUtils.EnumUtils;
import com.fasterxml.jackson.annotation.JsonCreator;

public enum SexoEnum implements EnumType {

    MASCULINO("Masculino"),
    FEMININO("Feminino"),
    INDEFINIDO("Indefinido");

    SexoEnum(String nome){
        this.nome = nome;
    }

    private String nome;

    @Override
    public String getNome() {
        return nome;
    }

    @JsonCreator
    public static SexoEnum fromValue(String value) {
        return EnumUtils.fromValue(SexoEnum.class, value);
    }
}
