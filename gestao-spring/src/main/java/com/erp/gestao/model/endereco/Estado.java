package com.erp.gestao.model.endereco;

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

    @ManyToOne
    @JoinColumn(name = "pais")
    private Pais pais;

    private String nome;

    private String sigla;

    private String codIBGE;

    @Version
    private Integer versao = 0;

    public Estado() {
    }

    public Estado(Pais pais, String nome, String sigla, String codIBGE) {
        this.pais = pais;
        this.nome = nome;
        this.sigla = sigla;
        this.codIBGE = codIBGE;
    }
}
