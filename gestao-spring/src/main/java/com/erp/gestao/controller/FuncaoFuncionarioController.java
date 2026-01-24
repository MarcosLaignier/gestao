package com.erp.gestao.controller;

import com.erp.gestao.dto.filterDTO.FuncaoFuncionarioFilterDTO;
import com.erp.gestao.model.pessoa.colaborador.FuncaoFuncionario;
import com.erp.gestao.service.FuncaoFuncionarioService;
import com.erp.gestao.utils.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/funcao-funcionario")
public class FuncaoFuncionarioController extends BaseController<FuncaoFuncionario, Integer> {

    @Autowired
    private FuncaoFuncionarioService service;

    @Override
    public FuncaoFuncionarioService getService() {
        return service;
    }


    @PostMapping("/listagem")
    public ResponseEntity<List<FuncaoFuncionario>> filtrar(@RequestBody FuncaoFuncionarioFilterDTO filtro) {
        List<FuncaoFuncionario> funcaoFuncionarioList = service.listar(filtro);
        return ResponseEntity.ok(funcaoFuncionarioList);
    }

}
