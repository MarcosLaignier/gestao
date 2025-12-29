package com.erp.gestao.infra.ws;

import com.erp.gestao.infra.model.ViaCepResponse;
import com.erp.gestao.service.CidadeService;
import com.erp.gestao.utils.validate.ApplicationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class ViaCepService {

    @Autowired
    private CidadeService cidadeService;

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
          response.setCidade(cidadeService.buscaOuCriaCidadeByNome(response.getLocalidade(), response.getIbge(), response.getUf()));
        }

        if (response == null || Boolean.TRUE.equals(response.getErro())) {
            throw new ApplicationException("CEP não encontrado");
        }

        return response;
    }
}
