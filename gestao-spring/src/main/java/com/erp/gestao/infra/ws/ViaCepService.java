package com.erp.gestao.infra.ws;

import com.erp.gestao.infra.model.ViaCepResponse;
import com.erp.gestao.model.Cidade;
import com.erp.gestao.repository.CidadeRepository;
import com.erp.gestao.repository.EstadoRepository;
import com.erp.gestao.utils.validate.ApplicationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class ViaCepService {

    @Autowired
    private CidadeRepository cidadeRepository;

    @Autowired
    private EstadoRepository estadoRepository;

    private static final String BASE_URL = "https://viacep.com.br/ws";

    private final WebClient webClient;

    public ViaCepService(WebClient webClient) {
        this.webClient = webClient;
    }

    public ViaCepResponse getCEP(String cep) {

        String cepSemFormatacao = cep.replaceAll("\\D", "");

        if (cepSemFormatacao.length() != 8) {
            throw new ApplicationException("CEP inválido");
        }

        ViaCepResponse response = webClient
                .get()
                .uri(BASE_URL + "/" + cepSemFormatacao + "/json/")
                .retrieve()
                .bodyToMono(ViaCepResponse.class)
                .block();

        if (response != null  && StringUtils.hasText(response.getLocalidade()) ) {
            Cidade cidade = cidadeRepository.findByNome(response.getLocalidade());

            if(cidade != null) {
                response.setCidade(cidade);
            }else{
                Cidade newCidade = new Cidade();
                newCidade.setNome(response.getLocalidade());
                newCidade.setCodIBGE(response.getIbge());
                newCidade.setEstado(estadoRepository.findBySigla(response.getUf()));
                response.setCidade(cidadeRepository.save(newCidade));
            }
        }

        if (response == null || Boolean.TRUE.equals(response.getErro())) {
            throw new ApplicationException("CEP não encontrado");
        }

        return response;
    }
}
