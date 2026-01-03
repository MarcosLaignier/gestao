package com.erp.gestao.repository;

import com.erp.gestao.model.endereco.Pais;
import org.hibernate.service.spi.ServiceException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository()
public interface PaisRepository extends JpaRepository<Pais, Integer>, JpaSpecificationExecutor<Pais> {

    Pais findBySigla(String sigla) throws ServiceException;
}