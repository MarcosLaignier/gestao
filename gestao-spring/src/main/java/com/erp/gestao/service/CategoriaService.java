package com.erp.gestao.service;

import com.erp.gestao.dto.filterDTO.CategoriaFilterDTO;
import com.erp.gestao.model.Categoria;
import com.erp.gestao.model.Marca;
import com.erp.gestao.repository.CategoriaRepository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.SpecificationBuilder;
import com.erp.gestao.utils.validate.ValidateMetodsUtils;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService extends BaseService<Categoria, Integer> {

    @Autowired
    private CategoriaRepository repository;
    @Override
    public CategoriaRepository getRepository() { return repository; }

    public List<Categoria> listar(CategoriaFilterDTO filter) {
        return repository.findAll(
                SpecificationBuilder.of(Categoria.class)
                        .likeIgnoreCase("nome", filter.getNome())
        );
    }

    @Override
    protected void validate(Categoria entity) throws ServiceException {

        ValidateMetodsUtils.validate(entity, genericUniqueValidator);

        super.validate(entity);
    }
}
