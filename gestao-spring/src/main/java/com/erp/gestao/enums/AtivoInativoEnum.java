package com.erp.gestao.enums;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum AtivoInativoEnum {

    ATIVO("Ativo"),
    INATIVO("Inativo");

    AtivoInativoEnum(String nome){
        this.nome = nome;
    }

    private String nome;

    //    Metodo feito para receber o nome do enum e buscar a chave correspondente
    @JsonCreator
    public static AtivoInativoEnum fromValue(String value) {
        for (AtivoInativoEnum status : AtivoInativoEnum.values()) {
            if (status.nome.equalsIgnoreCase(value)) {
                return status;
            }
        }
        return null;
    }
}
