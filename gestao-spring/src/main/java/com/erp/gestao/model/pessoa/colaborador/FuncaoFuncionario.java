package com.erp.gestao.model.pessoa.colaborador;

import com.erp.gestao.utils.validate.ValidateField;
import com.erp.gestao.utils.validate.ValidationType;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name ="funcaoFuncionario")
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class FuncaoFuncionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Nome")
    private String descricao;

    private Boolean acessoPainelGestor;

    @Version
    private Integer versao = 0;

    public FuncaoFuncionario() {
    }

    public FuncaoFuncionario(String descricao, Boolean acessoPainelGestor) {
        this.descricao = descricao;
        this.acessoPainelGestor = acessoPainelGestor;
    }
}
