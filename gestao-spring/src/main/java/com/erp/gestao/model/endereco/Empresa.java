package com.erp.gestao.model.endereco;

import com.erp.gestao.model.Pessoa;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "empresa")
@Data
@EqualsAndHashCode(callSuper = true)
public class Empresa extends Pessoa {

    private String nomeFantasia;

    private String inscricaoEstadual;

    private String logotipoPath;


}