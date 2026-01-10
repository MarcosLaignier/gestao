package com.erp.gestao.repository;

import com.erp.gestao.model.Marca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository()
public interface MarcaRepository  extends JpaRepository<Marca, Integer>, JpaSpecificationExecutor<Marca> {
}
