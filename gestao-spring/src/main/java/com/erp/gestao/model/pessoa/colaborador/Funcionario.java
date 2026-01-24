package com.erp.gestao.model.pessoa.colaborador;

import com.erp.gestao.model.pessoa.Pessoa;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "funcionario")
@Data
@EqualsAndHashCode(callSuper = true)
public class Funcionario extends Pessoa {

    @Temporal(TemporalType.DATE)
    private Date dataAdmissao;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "funcionario")
    private List<FuncionarioPapel> funcionarioPapelList;

}