package com.erp.gestao.model;

import com.erp.gestao.enums.AtivoInativoEnum;
import com.erp.gestao.enums.SexoEnum;
import com.erp.gestao.enums.TipoPessoaEnum;
import com.erp.gestao.utils.validate.ValidateField;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name ="pessoa")
@Getter
@Setter
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
    private SexoEnum sexoEnum;

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

    @Override
    public final boolean equals(Object o) {
        if (!(o instanceof Pessoa pessoa)) return false;

        return Objects.equals(id, pessoa.id) && Objects.equals(nome, pessoa.nome) && Objects.equals(documento, pessoa.documento) && Objects.equals(nascimento, pessoa.nascimento) && tipoPessoa == pessoa.tipoPessoa && situacao == pessoa.situacao;
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(id);
        result = 31 * result + Objects.hashCode(nome);
        result = 31 * result + Objects.hashCode(documento);
        result = 31 * result + Objects.hashCode(nascimento);
        result = 31 * result + Objects.hashCode(tipoPessoa);
        result = 31 * result + Objects.hashCode(situacao);
        return result;
    }
}
