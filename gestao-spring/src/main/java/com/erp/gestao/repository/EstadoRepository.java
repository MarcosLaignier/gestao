package com.erp.gestao.repository;

import com.erp.gestao.model.Cidade;
import com.erp.gestao.model.Estado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository()
public interface EstadoRepository extends JpaRepository<Estado, Integer>, JpaSpecificationExecutor<Estado> {

    public Estado findByNome(String nome);

    public Estado findBySigla(String sigla);
}