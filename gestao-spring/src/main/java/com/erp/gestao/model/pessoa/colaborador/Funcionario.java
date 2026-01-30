package com.erp.gestao.model.pessoa.colaborador;

import com.erp.gestao.enums.AtivoInativoEnum;
import com.erp.gestao.enums.PapelEnum;
import com.erp.gestao.enums.SexoEnum;
import com.erp.gestao.enums.TipoPessoaEnum;
import com.erp.gestao.model.pessoa.Pessoa;
import com.erp.gestao.model.pessoa.PessoaPapel;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "funcionario")
@Data
@EqualsAndHashCode(callSuper = true)
public class Funcionario extends PessoaPapel{

    private LocalDate dataAdmissao;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "funcionario")
    private List<FuncionarioPapel> funcionarioPapelList;

    public Funcionario() {
        this.setPapel(PapelEnum.FUNCIONARIO);
    }


}