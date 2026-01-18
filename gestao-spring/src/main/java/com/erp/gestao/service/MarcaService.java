package com.erp.gestao.service;

import com.erp.gestao.dto.filterDTO.MarcaFilterDTO;
import com.erp.gestao.model.Marca;
import com.erp.gestao.repository.MarcaRepository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.SpecificationBuilder;
import com.erp.gestao.utils.validate.ValidateMetodsUtils;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service()
public class MarcaService extends BaseService<Marca, Integer> {

    @Autowired
    private MarcaRepository repository;

    @Override
    public MarcaRepository getRepository() { return repository; }

    public List<Marca> listar(MarcaFilterDTO filter) {
        return repository.findAll(
                SpecificationBuilder.of(Marca.class)
                        .likeIgnoreCase("nome", filter.getNome())
        );
    }

    @Override
    protected void validate(Marca entity) throws ServiceException {

        ValidateMetodsUtils.validate(entity, genericUniqueValidator);

        super.validate(entity);
    }

}
