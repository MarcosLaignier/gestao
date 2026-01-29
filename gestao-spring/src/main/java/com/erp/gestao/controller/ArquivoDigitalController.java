package com.erp.gestao.controller;

import com.erp.gestao.model.ArquivoDigital;
import com.erp.gestao.service.ArquivoDigitalService;
import com.erp.gestao.utils.BaseController;
import com.erp.gestao.utils.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;

@RestController
@RequestMapping("arquivo-digital")
public class ArquivoDigitalController extends BaseController<ArquivoDigital, Long> {
    @Autowired
    private ArquivoDigitalService arquivoDigitalService;

    @Override
    public BaseService getService() {
        return arquivoDigitalService;
    }

    @PostMapping("/upload")
    public ResponseEntity<ArquivoDigital> uploadArquivo(@RequestParam("file") MultipartFile file) {
        try {
            ArquivoDigital arquivo = arquivoDigitalService.salvarArquivo(file);
            return ResponseEntity.status(HttpStatus.CREATED).body(arquivo);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadArquivo(@PathVariable Long id) {
        ArquivoDigital arquivo = arquivoDigitalService.buscarArquivo(id);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(arquivo.getTipo()));
        headers.setContentDispositionFormData("attachment", arquivo.getNomeDoArquivo());

        // Adicionar informações customizadas nos headers
        headers.add("X-Arquivo-Id", arquivo.getId().toString());
        headers.add("X-Arquivo-Nome", arquivo.getNomeDoArquivo());
        headers.add("X-Arquivo-Tipo", arquivo.getTipo());
        headers.add("X-Arquivo-Tamanho", arquivo.getTamanho().toString());

        /* Importante, se não o front não consegue capturar os headers personalizados */
        headers.setAccessControlExposeHeaders(Arrays.asList(
                "X-Arquivo-Id",
                "X-Arquivo-Nome",
                "X-Arquivo-Tipo",
                "X-Arquivo-Tamanho"
        ));

        return ResponseEntity.ok()
                .headers(headers)
                .body(arquivo.getDados());
    }
}
