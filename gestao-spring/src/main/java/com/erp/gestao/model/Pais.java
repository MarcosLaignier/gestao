package com.erp.gestao.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name ="pais")
@Data
public class Pais {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private String sigla;

    @Version
    private Integer versao = 0;
}
