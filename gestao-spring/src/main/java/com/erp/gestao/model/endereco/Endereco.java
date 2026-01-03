package com.erp.gestao.model.endereco;

import com.erp.gestao.model.Pessoa;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name ="endereco")
@Getter
@Setter
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "pessoa")
    private Pessoa pessoa;

    @ManyToOne
    @JoinColumn(name = "cidade")
    private Cidade cidade;

    private String logradouro;

    private String numero;

    private String complemento;

    private String bairro;

    private String cep;

    private String pontoReferencia;

    @Version
    private Integer versao = 0;
}
