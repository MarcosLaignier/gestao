package com.erp.gestao.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "arquivo_digital")
@Data
public class ArquivoDigital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeDoArquivo;
    private String tipo;
    private Long tamanho;

    @Lob
    @Column(name = "dados", columnDefinition = "LONGBLOB")
    private byte[] dados;
}
