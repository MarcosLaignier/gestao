package com.erp.gestao.model.pessoa.colaborador;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name ="funcionarioPapel")
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class FuncionarioPapel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne()
    private Funcionario funcionario;

    @ManyToOne()
    private FuncaoFuncionario funcaoFuncionario;

    @Version
    private Integer versao = 0;

}
