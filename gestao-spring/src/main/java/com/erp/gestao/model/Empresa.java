package com.erp.gestao.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "empresa")
@Data
@EqualsAndHashCode(callSuper = true)
public class Empresa extends Pessoa {

    @Column(nullable = false, length = 100)
    private String nomeFantasia;

    @Column(nullable = false, length = 100)
    private String razaoSocial;

    private String inscricaoEstadual;

    private String logotipoPath;

}