package com.erp.gestao.controller;

import com.erp.gestao.dto.filterDTO.ProdutoFilterDTO;
import com.erp.gestao.model.Produto;
import com.erp.gestao.service.ProdutoService;
import com.erp.gestao.utils.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/produto")
public class ProdutoController extends BaseController<Produto, Integer> {

    @Autowired
    private ProdutoService service;

    @Override
    public ProdutoService getService() {
        return service;
    }

    @GetMapping
    public ResponseEntity<List<Produto>> findAll() {
        List<Produto> result = service.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping("/listagem")
    public ResponseEntity<List<Produto>> filtrar(@RequestBody ProdutoFilterDTO filtro) {
        List<Produto> Equipamentos = service.listar(filtro);
        return ResponseEntity.ok(Equipamentos);
    }

}
