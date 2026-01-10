package com.erp.gestao.controller;

import com.erp.gestao.dto.filterDTO.TipoProdutoFilterDTO;
import com.erp.gestao.model.TipoProduto;
import com.erp.gestao.service.TipoProdutoService;
import com.erp.gestao.utils.BaseController;
import com.erp.gestao.utils.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/tipoProduto")
public class TipoProdutoController extends BaseController<TipoProduto, Integer> {

    @Autowired
    private TipoProdutoService service;
    @Override
    public BaseService getService() { return service; }

    @PostMapping("/listagem")
    public ResponseEntity<List<TipoProduto>> filtrar(@RequestBody TipoProdutoFilterDTO filtro) {
        List<TipoProduto> tipoProdutos = service.listar(filtro);
        return ResponseEntity.ok(tipoProdutos);
    }

}
