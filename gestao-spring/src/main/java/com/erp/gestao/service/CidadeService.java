package com.erp.gestao.service;

import com.erp.gestao.dto.filterDTO.CidadeFilterDTO;
import com.erp.gestao.model.endereco.Cidade;
import com.erp.gestao.repository.CidadeRepository;
import com.erp.gestao.repository.EstadoRepository;
import com.erp.gestao.utils.BaseService;
import com.erp.gestao.utils.SpecificationBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service()
public class CidadeService extends BaseService<Cidade, Integer> {

    @Autowired
    private CidadeRepository repository;

    @Autowired
    private EstadoRepository estadoRepository;

    @Override
    public CidadeRepository getRepository() {
        return repository;
    }

    public List<Cidade> listar(CidadeFilterDTO filter) {
        return repository.findAll( SpecificationBuilder.of(Cidade.class)
                .likeIgnoreCase("nome", filter.getNome())
                .equal("sigla", filter.getSigla())
                .equal("codIBGE", filter.getCodIBGE()));
    }

    public Cidade buscaOuCriaCidadeByNome(String nome, String ibge, String uf) {
        Cidade cidade = getRepository().findByNome(nome);

        if(cidade != null) {
            return cidade;
        }else{
            Cidade newCidade = new Cidade();
            newCidade.setNome(nome);
            newCidade.setCodIBGE(ibge);
            newCidade.setEstado(estadoRepository.findBySigla(uf));
            return save(newCidade);
        }
    }





}