package com.erp.gestao.model;

import com.erp.gestao.model.pessoa.Pessoa;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name ="telefone")
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Telefone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "pessoa")
    private Pessoa pessoa;

    private String numero;

    private Boolean principal;

    private Boolean isWhatsappNotifica;

    @Version
    private Integer versao = 0;
}
