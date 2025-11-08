package com.erp.gestao.dto.filterDTO;

import com.erp.gestao.enums.AtivoInativoEnum;

import java.time.LocalDate;

public class PessoaFilterDTO {

    private Integer id;

    private String nome;

    private String documento;

    private LocalDate nascimento;

    private AtivoInativoEnum situacao;

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
}
