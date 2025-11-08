package com.erp.gestao.utils;

import com.erp.gestao.enums.AtivoInativoEnum;
import com.erp.gestao.model.Pessoa;
import com.erp.gestao.repository.PessoaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

/** Classe que sobe junto com o spring,
 * Como utilizo um banco H2 ele cria dados simulados de forma automatica
 * para evitar trabalhos manuais
 *
 * Forma de funcionamento é bem simples, devera injetar o repository e no run criar os dados que quiser
 * Atenção a entidade precisa dos construtores
 */
@Component
public class DataBaseLoader implements CommandLineRunner {

    private final PessoaRepository pessoaRepository;

    public DataBaseLoader(PessoaRepository pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }

    @Override
    public void run(String... args) {

        pessoaRepository.save(new Pessoa("Marcos Leao", "07956285607", LocalDate.now(), AtivoInativoEnum.ATIVO));
        pessoaRepository.save(new Pessoa("Ana Souza", "12345678901", LocalDate.now(), AtivoInativoEnum.ATIVO));
        pessoaRepository.save(new Pessoa("Carlos Pereira", "98765432100", LocalDate.now(), AtivoInativoEnum.ATIVO));
    }
}