package com.erp.gestao.dto.filterDTO;

import com.erp.gestao.model.Produto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ReservaFilterDTO {
        private Integer id;
        private Produto produto;
        private LocalDate dataReserva;
        private Integer quantidade;
        private Boolean estorno = false;
        private Integer quantidadeEstornada;
        private LocalDate dataEstorno;
        private Boolean estornoCompleto = false;
        private Integer versao = 0;
}
