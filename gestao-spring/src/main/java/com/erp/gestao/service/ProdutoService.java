package com.erp.gestao.service;

import com.erp.gestao.dto.filterDTO.ProdutoFilterDTO;
import com.erp.gestao.model.Produto;
import com.erp.gestao.repository.ProdutoRepository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.SpecificationBuilder;
import com.erp.gestao.utils.validate.ValidateMetodsUtils;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service()
public class ProdutoService extends BaseService<Produto, Integer> {

    @Autowired
    private ProdutoRepository repository;

    @Override
    public ProdutoRepository getRepository() {
        return repository;
    }

    public List<Produto> listar(ProdutoFilterDTO filter) {
        return repository.findAll(
                SpecificationBuilder.of(Produto.class)
                        .likeIgnoreCase("nome", filter.getNome())
                        .likeIgnoreCase("codigoPatrimonio", filter.getCodigoPatrimonio())
                        .likeIgnoreCase("modelo", filter.getModelo())
                        .equal("dataAquisicao", filter.getDataAquisicao())
                        .equal("statusAtual", filter.getStatusAtual())
                        .equal("valorDiaria", filter.getValorDiaria())
                        .between("dataAquisicao", filter.getDataAquisicaoInicio(), filter.getDataAquisicaoFim())
                        .between("valorDiaria", filter.getValorDiariaInicio(), filter.getValorDiariaFim())
        );
    }

    @Override
    protected void validate(Produto entity) throws ServiceException {

        ValidateMetodsUtils.validateFieldsNonNull(entity);

        if(entity.getDataAquisicao() != null && entity.getDataAquisicao().isAfter(LocalDate.now())){
            throw new IllegalArgumentException("A data de aquisição não pode ser futura!");
        }


        super.validate(entity);
    }

}