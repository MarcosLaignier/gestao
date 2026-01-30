package com.erp.gestao.model.pessoa;

import com.erp.gestao.enums.PapelEnum;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "pessoa_papel")
@Data
@Inheritance(strategy = InheritanceType.JOINED)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "papel")
@JsonSubTypes({
        @JsonSubTypes.Type(value = Empresa.class, name = "EMPRESA")
})
public abstract class PessoaPapel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "pessoa")
    private Pessoa pessoa;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PapelEnum papel;

    private Boolean ativo = true;
}
