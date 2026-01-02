package com.erp.gestao.controller;

import com.erp.gestao.dto.filterDTO.EmpresaFilterDTO;
import com.erp.gestao.model.Empresa;
import com.erp.gestao.service.EmpresaService;
import com.erp.gestao.utils.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/empresa")
public class EmpresaController extends BaseController<Empresa, Integer> {

    @Autowired
    private EmpresaService service;

    @Override
    public EmpresaService getService() {
        return service;
    }

    @GetMapping()
    public ResponseEntity<List<Empresa>> findAll() {
        List<Empresa> result = service.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/padrao")
    public ResponseEntity<Empresa> getEmpresa() {
        Empresa result = service.getEmpresa();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping("/listagem")
    public ResponseEntity<List<Empresa>> filtrar(@RequestBody EmpresaFilterDTO filtro) {
        List<Empresa> empresaList = service.listar(filtro);
        return ResponseEntity.ok(empresaList);
    }

}
