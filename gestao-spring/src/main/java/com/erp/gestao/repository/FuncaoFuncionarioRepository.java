package com.erp.gestao.repository;

import com.erp.gestao.model.pessoa.colaborador.FuncaoFuncionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository()
public interface FuncaoFuncionarioRepository extends JpaRepository<FuncaoFuncionario, Integer>, JpaSpecificationExecutor<FuncaoFuncionario> {

}