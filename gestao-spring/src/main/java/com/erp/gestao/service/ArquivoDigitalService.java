package com.erp.gestao.service;

import com.erp.gestao.model.ArquivoDigital;
import com.erp.gestao.repository.ArquivoDigitalRepository;
import com.erp.gestao.utils.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ArquivoDigitalService extends BaseService<ArquivoDigital, Long> {
    @Autowired
    private ArquivoDigitalRepository arquivoDigitalRepository;

    @Override
    public ArquivoDigitalRepository getRepository() {
        return arquivoDigitalRepository;
    }

    public ArquivoDigital salvarArquivo(MultipartFile file) throws IOException {
        ArquivoDigital arquivo = new ArquivoDigital();
        arquivo.setNomeDoArquivo(file.getOriginalFilename());
        arquivo.setTipo(file.getContentType());
        arquivo.setDados(file.getBytes());
        arquivo.setTamanho(file.getSize());

        return arquivoDigitalRepository.save(arquivo);
    }

    public ArquivoDigital buscarArquivo(Long id) {
        return arquivoDigitalRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Arquivo não encontrado"));
    }
}
