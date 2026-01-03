package com.erp.gestao.repository;

import com.erp.gestao.model.endereco.Cidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository()
public interface CidadeRepository extends JpaRepository<Cidade, Integer>, JpaSpecificationExecutor<Cidade> {

    Cidade findByNome(String nome);
}