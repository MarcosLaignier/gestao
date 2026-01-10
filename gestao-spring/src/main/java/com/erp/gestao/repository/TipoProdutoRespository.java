package com.erp.gestao.repository;

import com.erp.gestao.model.TipoProduto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository()
public interface TipoProdutoRespository extends JpaRepository<TipoProduto, Integer>, JpaSpecificationExecutor<TipoProduto> {

}
