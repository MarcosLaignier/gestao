package com.erp.gestao.utils.validate;

/** Metodo criado para os informar os tipos de validacao e as msg padroes das validacoes automatica */
public enum ValidationType {

    NOT_NULL("O campo %s deve ser informado."),
    UNIQUE("Já existe um registro com %s informado."),
    SIZE("O campo %s deve conter entre %d e %d caracteres.");

    private final String template;

    ValidationType(String template) {
        this.template = template;
    }

    public String format(String fieldName, int min, int max) {
        return this == SIZE
                ? String.format(template, fieldName, min, max)
                : String.format(template, fieldName);
    }
}
