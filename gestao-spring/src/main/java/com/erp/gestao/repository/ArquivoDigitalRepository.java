package com.erp.gestao.repository;

import com.erp.gestao.model.ArquivoDigital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ArquivoDigitalRepository extends JpaRepository<ArquivoDigital, Long>, JpaSpecificationExecutor<ArquivoDigital> {
}
