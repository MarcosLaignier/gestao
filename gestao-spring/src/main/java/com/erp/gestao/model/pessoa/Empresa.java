package com.erp.gestao.model.pessoa;

import com.erp.gestao.enums.PapelEnum;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
@Entity
@Table(name = "empresa")
@Data
@EqualsAndHashCode(callSuper = true)
public class Empresa extends PessoaPapel {

    private String nomeFantasia;

    private String inscricaoEstadual;

    private String logotipoPath;

    public Empresa() {
        this.setPapel(PapelEnum.EMPRESA);
    }
}
