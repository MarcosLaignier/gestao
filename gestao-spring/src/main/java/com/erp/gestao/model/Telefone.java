package com.erp.gestao.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name ="telefone")
@Getter
@Setter
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
