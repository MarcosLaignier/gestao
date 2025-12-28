package com.erp.gestao.infra.ws;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

/** Classe que define como o WebClient do spring sera criado e injetado no serviço,
 * Isto vai dizer tipo... Alguem quer um WebClient? entao usa esta aqui
 * Evitando que sempre precisamos fazer 'WebClient.builder().build()'
 */
@Configuration
public class  WebClientConfig {

    @Bean
    public WebClient webClient() {
        return WebClient.builder().build();
    }
}