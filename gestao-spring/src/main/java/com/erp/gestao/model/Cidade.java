package com.erp.gestao.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name ="cidade")
@Getter
@Setter
public class Cidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "estado")
    private Estado estado;

    private String nome;

    private String sigla;

    private String codIBGE;

    @Version
    private Integer versao = 0;
}
