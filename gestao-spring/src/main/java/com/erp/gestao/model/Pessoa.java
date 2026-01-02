package com.erp.gestao.model;

import com.erp.gestao.enums.AtivoInativoEnum;
import com.erp.gestao.enums.SexoEnum;
import com.erp.gestao.enums.TipoPessoaEnum;
import com.erp.gestao.utils.validate.ValidateField;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name ="pessoa")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ValidateField(message = "O Nome deve ser Informado!")
    private String nome;

    @Column(unique = true)
    @ValidateField(message = "O Documento deve ser Informado!")
    private String documento;

    private String email;

    @ValidateField(message = "A Data de Nascimento deve ser Informada!")
    @Temporal(TemporalType.DATE)
    private LocalDate nascimento;

    @Enumerated(EnumType.STRING)
    @ValidateField(message = "O Sexo deve ser Informado!")
    private SexoEnum sexo;

    @Enumerated(EnumType.STRING)
    @ValidateField(message = "A situação deve ser Informada!")
    private TipoPessoaEnum tipoPessoa;

    @Enumerated(EnumType.STRING)
    @ValidateField(message = "A situação deve ser Informada!")
    private AtivoInativoEnum situacao;

//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "pessoa")
//    private List<PessoaTipo> pessoaTipoList;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "pessoa")
    private List<Telefone> telefoneList;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "pessoa")
    private List<Endereco> enderecoList;

    @Version
    private Integer versao = 0;

    public Pessoa() {
    }

    public Pessoa(String nome, String documento, LocalDate nascimento, AtivoInativoEnum situacao, TipoPessoaEnum tipoPessoa) {
        this.nome = nome;
        this.documento = documento;
        this.nascimento = nascimento;
        this.situacao = situacao;
        this.tipoPessoa = tipoPessoa;
    }
}
