package com.erp.gestao.controller;

import com.erp.gestao.model.Pessoa;
import com.erp.gestao.service.PessoaService;
import com.erp.gestao.utils.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/pessoa")
public class PessoaController  extends BaseController<Pessoa, Integer> {

    @Autowired
    private PessoaService service;

    @Override
    public PessoaService getService() {
        return service;
    }

    @GetMapping
    public ResponseEntity<List<Pessoa>> findAll() {
        List<Pessoa> result = service.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
