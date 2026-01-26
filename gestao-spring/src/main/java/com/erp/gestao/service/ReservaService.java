package com.erp.gestao.service;

import com.erp.gestao.model.Reserva;
import com.erp.gestao.repository.ReservaRepository;
import com.erp.gestao.utils.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service()
public class ReservaService extends BaseService<Reserva, Integer> {
    @Autowired
    private ReservaRepository reservaRepository;

    @Override
    public JpaRepository getRepository() {
        return reservaRepository;
    }
}
