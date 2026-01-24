package com.erp.gestao.repository;

import com.erp.gestao.model.pessoa.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository()
public interface EmpresaRepository extends JpaRepository<Empresa, Integer>, JpaSpecificationExecutor<Empresa> {

}