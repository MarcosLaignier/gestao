package com.erp.gestao.service;

import com.erp.gestao.dto.filterDTO.FuncaoFuncionarioFilterDTO;
import com.erp.gestao.model.pessoa.colaborador.FuncaoFuncionario;
import com.erp.gestao.repository.FuncaoFuncionarioRepository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.SpecificationBuilder;
import com.erp.gestao.utils.validate.ValidateMetodsUtils;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service()
public class FuncaoFuncionarioService extends BaseService<FuncaoFuncionario, Integer> {

    @Autowired
    private FuncaoFuncionarioRepository repository;

    @Override
    public FuncaoFuncionarioRepository getRepository() {
        return repository;
    }

    public List<FuncaoFuncionario> listar(FuncaoFuncionarioFilterDTO filter) {
        return repository.findAll(
                SpecificationBuilder.of(FuncaoFuncionario.class)
                        .likeIgnoreCase("descricao", filter.getDescricao()));
    }

    @Override
    protected void validate(FuncaoFuncionario entity) throws ServiceException {
        ValidateMetodsUtils.validate(entity, genericUniqueValidator);
        super.validate(entity);
    }

}