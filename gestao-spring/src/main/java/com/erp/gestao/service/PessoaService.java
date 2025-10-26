package com.erp.gestao.service;

import com.erp.gestao.model.Pessoa;
import com.erp.gestao.repository.PessoaRepository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.CollectionMetodsUtils;
import com.erp.gestao.utils.validate.ValidateMetodsUtils;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service()
public class PessoaService extends BaseService<Pessoa, Integer> {

    @Autowired
    private PessoaRepository repository;

    @Override
    public PessoaRepository getRepository() {
        return repository;
    }


    @Override
    protected void validate(Pessoa entity) throws ServiceException {

        ValidateMetodsUtils.validateFieldsNonNull(entity);

        if (!CollectionMetodsUtils.validaDocumento(entity.getDocumento())){
            throw new IllegalArgumentException("Documento inválido");
        }

        if(entity.getNascimento() != null && entity.getNascimento().before(new Date())){
            throw new IllegalArgumentException("A data de nascimento não pode ser futura!");
        }


        super.validate(entity);
    }

}