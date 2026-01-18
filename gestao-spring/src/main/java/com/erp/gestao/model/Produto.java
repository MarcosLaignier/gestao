package com.erp.gestao.model;

import com.erp.gestao.enums.StatusProdutoEnum;
import com.erp.gestao.utils.validate.ValidateField;
import com.erp.gestao.utils.validate.ValidationType;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name ="produto")
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Categoria")
    private Categoria categoria;

    @ManyToOne
    private Marca marca;

    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Nome")
    private String nome;

    @ValidateField(value = {ValidationType.NOT_NULL, ValidationType.UNIQUE}, fieldName = "Codigo de Patrimonio")
    private String codigoPatrimonio;

    private String modelo;

    @Column(precision = 10, scale = 2)
    @ValidateField(value = {ValidationType.NOT_NULL}, fieldName = "Valor da Diaria")
    private BigDecimal valorDiaria;

    @Enumerated(EnumType.STRING)
    private StatusProdutoEnum statusAtual;

    private LocalDate dataAquisicao;

    @Column(columnDefinition = "TEXT")
    private String observacoes;

    @Version
    private Integer versao = 0;

}
