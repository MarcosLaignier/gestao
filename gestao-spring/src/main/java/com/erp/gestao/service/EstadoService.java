package com.erp.gestao.service;

import com.erp.gestao.dto.filterDTO.EstadoFilterDTO;
import com.erp.gestao.model.Estado;
import com.erp.gestao.repository.EstadoRepository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.SpecificationBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service()
public class EstadoService extends BaseService<Estado, Integer> {

    @Autowired
    private EstadoRepository repository;

    @Override
    public EstadoRepository getRepository() {
        return repository;
    }

    public List<Estado> listar(EstadoFilterDTO filter) {
        return repository.findAll( SpecificationBuilder.of(Estado.class)
                .likeIgnoreCase("nome", filter.getNome())
                .equal("sigla", filter.getSigla())
                .equal("codIBGE", filter.getCodIBGE()));
    }





}