package com.erp.gestao.controller;

import com.erp.gestao.dto.filterDTO.FuncionarioFilterDTO;
import com.erp.gestao.model.pessoa.colaborador.Funcionario;
import com.erp.gestao.service.FuncionarioService;
import com.erp.gestao.utils.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/funcionario")
public class FuncionarioController extends BaseController<Funcionario, Integer> {

    @Autowired
    private FuncionarioService service;

    @Override
    public FuncionarioService getService() {
        return service;
    }


    @PostMapping("/listagem")
    public ResponseEntity<List<Funcionario>> filtrar(@RequestBody FuncionarioFilterDTO filtro) {
        List<Funcionario> empresaList = service.listar(filtro);
        return ResponseEntity.ok(empresaList);
    }

}
