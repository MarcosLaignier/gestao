package com.erp.gestao.model.pessoa;

import com.erp.gestao.enums.PapelEnum;
import com.erp.gestao.model.pessoa.colaborador.Funcionario;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "papel", visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = Empresa.class, name = "EMPRESA"),
        @JsonSubTypes.Type(value = Funcionario.class, name = "FUNCIONARIO")
})
@Data
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
