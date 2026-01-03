package com.erp.gestao.model.endereco;

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

    public Pais() {
    }

    public Pais(String nome, String sigla) {
        this.nome = nome;
        this.sigla = sigla;
    }
}
