package com.erp.gestao.controller;

import com.erp.gestao.dto.filterDTO.CategoriaFilterDTO;
import com.erp.gestao.model.Categoria;
import com.erp.gestao.service.CategoriaService;
import com.erp.gestao.utils.BaseController;
import com.erp.gestao.utils.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/categoria")
public class CategoriaController extends BaseController<Categoria, Integer> {

    @Autowired
    private CategoriaService service;
    @Override
    public BaseService getService() { return service; }

    @PostMapping("/listagem")
    public ResponseEntity<List<Categoria>> filtrar(@RequestBody CategoriaFilterDTO filtro) {
        List<Categoria> categorias = service.listar(filtro);
        return ResponseEntity.ok(categorias);
    }
}
