package com.erp.gestao.service;

import com.erp.gestao.dto.filterDTO.TipoProdutoFilterDTO;
import com.erp.gestao.model.TipoProduto;
import com.erp.gestao.repository.TipoProdutoRespository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.SpecificationBuilder;
import com.erp.gestao.utils.validate.ValidateMetodsUtils;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service()
public class TipoProdutoService extends BaseService<TipoProduto, Integer> {

    @Autowired
    private TipoProdutoRespository repository;
    @Override
    public JpaRepository getRepository() { return repository; }

    public List<TipoProduto> listar(TipoProdutoFilterDTO filter) {
        return repository.findAll(
                SpecificationBuilder.of(TipoProduto.class)
                        .likeIgnoreCase("nome", filter.getNome())
                        .likeIgnoreCase("codigo", filter.getCodigo())
        );
    }

    @Override
    protected void validate(TipoProduto entity) throws ServiceException {

        ValidateMetodsUtils.validate(entity, genericUniqueValidator);

        super.validate(entity);
    }
}
