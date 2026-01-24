package com.erp.gestao.service;

import com.erp.gestao.dto.filterDTO.FuncionarioFilterDTO;
import com.erp.gestao.model.pessoa.colaborador.Funcionario;
import com.erp.gestao.repository.FuncionarioRepository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.SpecificationBuilder;
import com.erp.gestao.utils.validate.ValidateMetodsUtils;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service()
public class FuncionarioService extends BaseService<Funcionario, Integer> {

    @Autowired
    private FuncionarioRepository repository;

    @Override
    public FuncionarioRepository getRepository() {
        return repository;
    }

    public List<Funcionario> listar(FuncionarioFilterDTO filter) {
        return repository.findAll(
                SpecificationBuilder.of(Funcionario.class)
                        .likeIgnoreCase("nome", filter.getNome())
                        .likeIgnoreCase("documento", filter.getDocumento())
                        .equal("nascimento", filter.getNascimento())
                        .equal("situacao", filter.getSituacao())
                        .between("admissao", filter.getAdmissaoInicio(), filter.getAdmissaoFim())
                        .between("nascimento", filter.getNascimentoInicio(), filter.getNascimentoFim())
        );
    }

    @Override
    protected void validate(Funcionario entity) throws ServiceException {

        ValidateMetodsUtils.validate(entity, genericUniqueValidator);

        super.validate(entity);
    }

    @Override
    protected void beforeUpdate(Funcionario entity) throws ServiceException {
        sincronizarReferencias(entity);
        super.beforeUpdate(entity);
    }

    @Override
    protected void beforeSave(Funcionario entity) throws ServiceException {
        sincronizarReferencias(entity);
        super.beforeSave(entity);
    }


    private void sincronizarReferencias(Funcionario pessoa) {

        Optional.ofNullable(pessoa.getTelefoneList())
                .orElse(List.of())
                .forEach(t -> t.setPessoa(pessoa));

        Optional.ofNullable(pessoa.getEnderecoList())
                .orElse(List.of())
                .forEach(e -> e.setPessoa(pessoa));
    }

}