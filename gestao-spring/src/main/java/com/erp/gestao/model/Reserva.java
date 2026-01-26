package com.erp.gestao.model;

import com.erp.gestao.model.pessoa.Pessoa;
import com.erp.gestao.utils.validate.ValidateField;
import com.erp.gestao.utils.validate.ValidationType;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "reserva")
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "locatario_id")
    private Pessoa locatario;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "produto_id")
    private Produto produto;

    @Temporal(TemporalType.DATE)
    private LocalDate dataReserva;

    private Integer quantidadeDeDias;

    @Temporal(TemporalType.DATE)
    private LocalDate previsaoDeEntrega;

    @ValidateField(value = {ValidationType.GREATER_THAN}, fieldName = "Quantidade")
    private Integer quantidadeLocada;

    private Boolean estorno = false;

    @ValidateField(value = {ValidationType.GREATER_THAN}, fieldName = "Quantidade Estornada")
    private Integer quantidadeEstornada;

    @Temporal(TemporalType.DATE)
    private LocalDate dataEstorno;

    private Boolean estornoCompleto = false;

    private Integer versao = 0;
}
