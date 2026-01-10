package com.erp.gestao.model;

import com.erp.gestao.utils.validate.ValidateField;
import com.erp.gestao.utils.validate.ValidationType;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name ="tipoproduto")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class TipoProduto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Nome")
    private String nome;

    @ValidateField(value = {ValidationType.UNIQUE}, fieldName = "Codigo")
    private String codigo;

    @Version
    private Integer versao = 0;

    public TipoProduto() {
    }

    public TipoProduto(String codigo, String nome ) {
        this.codigo = codigo;
        this.nome = nome;
    }

}
