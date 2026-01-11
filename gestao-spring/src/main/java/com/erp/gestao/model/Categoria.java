package com.erp.gestao.model;

import com.erp.gestao.utils.validate.ValidateField;
import com.erp.gestao.utils.validate.ValidationType;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name ="categoria")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Nome")
    private String nome;

    @Version
    private Integer versao = 0;

    public Categoria() {
    }

    public Categoria(String nome) {
        this.nome = nome;
    }

}
