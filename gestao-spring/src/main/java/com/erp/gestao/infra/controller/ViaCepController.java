package com.erp.gestao.infra.controller;

import com.erp.gestao.infra.model.ViaCepResponse;
import com.erp.gestao.infra.ws.ViaCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cep")
public class ViaCepController {

    @Autowired
    private ViaCepService viaCepService;

    @GetMapping("/{cep}")
    public ViaCepResponse getCEP(@PathVariable String cep) {
        return viaCepService.getCEP(cep);
    }
}

