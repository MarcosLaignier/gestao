package com.erp.gestao.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name ="estado")
@Getter
@Setter
public class Estado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private String sigla;

    private String codIBGE;

    @Version
    private Integer versao = 0;
}
