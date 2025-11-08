package com.erp.gestao.model;

import com.erp.gestao.enums.AtivoInativoEnum;
import com.erp.gestao.utils.validate.ValidateField;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name ="pessoa")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ValidateField(message = "O Nome deve ser Informado!")
    private String nome;

    @Column(unique = true)
    @ValidateField(message = "O Documento deve ser Informado!")
    private String documento;

    @ValidateField(message = "A Data de Nascimento deve ser Informada!")
//    @Temporal(TemporalType.DATE)
    private LocalDate nascimento;


    @Enumerated(EnumType.STRING)
    @ValidateField(message = "A situação deve ser Informada!")
    private AtivoInativoEnum situacao;

//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "pessoa")
//    private List<PessoaTipo> pessoaTipoList;

    @Version
    private Integer versao = 0;

    public Pessoa() {
    }

    public Pessoa(String nome, String documento, LocalDate nascimento, AtivoInativoEnum situacao) {
        this.nome = nome;
        this.documento = documento;
        this.nascimento = nascimento;
        this.situacao = situacao;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public LocalDate getNascimento() {
        return nascimento;
    }

    public void setNascimento(LocalDate nascimento) {
        this.nascimento = nascimento;
    }

    public AtivoInativoEnum getSituacao() {
        return situacao;
    }

    public void setSituacao(AtivoInativoEnum situacao) {
        this.situacao = situacao;
    }

//    public List<PessoaTipo> getPessoaTipoList() {
//        return pessoaTipoList;
//    }
//
//    public void setPessoaTipoList(List<PessoaTipo> pessoaTipoList) {
//        this.pessoaTipoList = pessoaTipoList;
//    }

    public Integer getVersao() {
        return versao;
    }

    public void setVersao(Integer versao) {
        this.versao = versao;
    }

    @Override
    public final boolean equals(Object o) {
        if (!(o instanceof Pessoa pessoa)) return false;

        return Objects.equals(id, pessoa.id) && Objects.equals(nome, pessoa.nome) && Objects.equals(documento, pessoa.documento) && Objects.equals(nascimento, pessoa.nascimento) && situacao == pessoa.situacao;
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(id);
        result = 31 * result + Objects.hashCode(nome);
        result = 31 * result + Objects.hashCode(documento);
        result = 31 * result + Objects.hashCode(nascimento);
        result = 31 * result + Objects.hashCode(situacao);
        return result;
    }
}
