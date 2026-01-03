package com.erp.gestao.service;

import com.erp.gestao.dto.filterDTO.PessoaFilterDTO;
import com.erp.gestao.model.Pessoa;
import com.erp.gestao.repository.PessoaRepository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.CollectionMetodsUtils;
import com.erp.gestao.utils.SpecificationBuilder;
import com.erp.gestao.utils.validate.ValidateMetodsUtils;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service()
public class PessoaService extends BaseService<Pessoa, Integer> {

    @Autowired
    private PessoaRepository repository;

    @Override
    public PessoaRepository getRepository() {
        return repository;
    }

    public List<Pessoa> listar(PessoaFilterDTO filter) {
        return repository.findAll(
                SpecificationBuilder.of(Pessoa.class)
                        .likeIgnoreCase("nome", filter.getNome())
                        .likeIgnoreCase("documento", filter.getDocumento())
                        .equal("nascimento", filter.getNascimento())
                        .equal("situacao", filter.getSituacao())
                        .equal("tipoPessoa", filter.getTipoPessoa())
                        .between("nascimento", filter.getNascimentoInicio(), filter.getNascimentoFim())
        );
    }

    @Override
    protected void validate(Pessoa entity) throws ServiceException {

        ValidateMetodsUtils.validate(entity, genericUniqueValidator);

        if (!CollectionMetodsUtils.validaDocumento(entity.getDocumento())){
            throw new IllegalArgumentException("Documento inválido");
        }

        if(entity.getNascimento() != null && entity.getNascimento().isAfter(LocalDate.now())){
            throw new IllegalArgumentException("A data de nascimento não pode ser futura!");
        }


        super.validate(entity);
    }

    @Override
    protected void beforeUpdate(Pessoa entity) throws ServiceException {
        sincronizarReferencias(entity);
        super.beforeUpdate(entity);
    }

    @Override
    protected void beforeSave(Pessoa entity) throws ServiceException {
        sincronizarReferencias(entity);
        super.beforeSave(entity);
    }


    private void sincronizarReferencias(Pessoa pessoa) {

        Optional.ofNullable(pessoa.getTelefoneList())
                .orElse(List.of())
                .forEach(t -> t.setPessoa(pessoa));

        Optional.ofNullable(pessoa.getEnderecoList())
                .orElse(List.of())
                .forEach(e -> e.setPessoa(pessoa));
    }
}