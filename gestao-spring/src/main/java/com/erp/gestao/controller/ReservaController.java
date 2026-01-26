package com.erp.gestao.controller;

import com.erp.gestao.model.Reserva;
import com.erp.gestao.service.ReservaService;
import com.erp.gestao.utils.BaseController;
import com.erp.gestao.utils.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/reserva")
public class ReservaController extends BaseController<Reserva, Integer> {
    @Autowired
    private ReservaService reservaService;

    @Override
    public BaseService getService() {
        return reservaService;
    }
}
