package com.erp.gestao.repository;

import com.erp.gestao.model.endereco.Estado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository()
public interface EstadoRepository extends JpaRepository<Estado, Integer>, JpaSpecificationExecutor<Estado> {

    Estado findByNome(String nome);

    Estado findBySigla(String sigla);
}