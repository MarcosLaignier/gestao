package com.erp.gestao.model.pessoa;

import com.erp.gestao.enums.AtivoInativoEnum;
import com.erp.gestao.enums.SexoEnum;
import com.erp.gestao.enums.TipoPessoaEnum;
import com.erp.gestao.model.Telefone;
import com.erp.gestao.model.endereco.Endereco;
import com.erp.gestao.utils.validate.ValidateField;
import com.erp.gestao.utils.validate.ValidationType;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name ="pessoa")
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Nome")
    private String nome;

    @ValidateField(value = {ValidationType.NOT_NULL, ValidationType.UNIQUE}, fieldName = "Documento")
    private String documento;

    private String email;

    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Data de Nascimento")
    @Temporal(TemporalType.DATE)
    private LocalDate nascimento;

    @Enumerated(EnumType.STRING)
    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Sexo")
    private SexoEnum sexo;

    @Enumerated(EnumType.STRING)
    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Tipo de Pessoa")
    private TipoPessoaEnum tipoPessoa;

    @Enumerated(EnumType.STRING)
    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Situação")
    private AtivoInativoEnum situacao;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "pessoa")
    private List<Telefone> telefoneList;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "pessoa")
    private List<Endereco> enderecoList;

    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PessoaPapel> papeis;

    @Version
    private Integer versao = 0;

    public Pessoa() {
    }

    public Pessoa(String nome, String documento, LocalDate nascimento, AtivoInativoEnum situacao, SexoEnum sexo, TipoPessoaEnum tipoPessoa) {
        this.nome = nome;
        this.documento = documento;
        this.nascimento = nascimento;
        this.situacao = situacao;
        this.sexo = sexo;
        this.tipoPessoa = tipoPessoa;
    }
}
