package com.erp.gestao.controller;

import com.erp.gestao.dto.filterDTO.MarcaFilterDTO;
import com.erp.gestao.model.Marca;
import com.erp.gestao.service.MarcaService;
import com.erp.gestao.utils.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/marca")
public class MarcaController extends BaseController<Marca, Integer> {

    @Autowired
    private MarcaService service;

    @Override
    public MarcaService getService() { return service; }

    @PostMapping("/listagem")
    public ResponseEntity<List<Marca>> filtrar(@RequestBody MarcaFilterDTO filtro) {
        List<Marca> marcas = service.listar(filtro);
        return ResponseEntity.ok(marcas);
    }
}
