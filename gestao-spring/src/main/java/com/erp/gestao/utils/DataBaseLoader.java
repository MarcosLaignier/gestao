package com.erp.gestao.utils;

import com.erp.gestao.enums.AtivoInativoEnum;
import com.erp.gestao.enums.SexoEnum;
import com.erp.gestao.enums.TipoPessoaEnum;
import com.erp.gestao.model.Categoria;
import com.erp.gestao.model.Marca;
import com.erp.gestao.model.pessoa.Empresa;
import com.erp.gestao.model.endereco.Estado;
import com.erp.gestao.model.endereco.Pais;
import com.erp.gestao.model.pessoa.Pessoa;
import com.erp.gestao.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

/** Classe que sobe junto com o spring,
 * Como utilizo um banco H2 ele cria dados simulados de forma automatica
 * para evitar trabalhos manuais
 *
 * Forma de funcionamento é bem simples, devera injetar o repository e no run criar os dados que quiser
 * Atenção a entidade precisa dos construtores
 */
@Component
public class DataBaseLoader implements CommandLineRunner {

    private final EmpresaRepository empresaRepository;
    private final PessoaRepository pessoaRepository;
    private final PaisRepository paisRepository;
    private final EstadoRepository estadoRepository;
    private final MarcaRepository marcaRepository;
    private final CategoriaRepository categoriaRepository;

    public DataBaseLoader(EmpresaRepository empresaRepository,
                          PessoaRepository pessoaRepository,
                          PaisRepository paisRepository,
                          EstadoRepository estadoRepository,
                          MarcaRepository marcaRepository,
                          CategoriaRepository categoriaRepository) {
        this.empresaRepository = empresaRepository;
        this.pessoaRepository = pessoaRepository;
        this.paisRepository = paisRepository;
        this.estadoRepository = estadoRepository;
        this.marcaRepository = marcaRepository;
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    public void run(String... args) {
        createEmpresa();
        createPessoa();
        createPaises();
        createEstadosBrasil();
        createMarca();
        createCategoria();
    }

    private void createEmpresa() {
        Empresa empresa = new Empresa();
        empresa.setNome("Empresa dos Murta");
        empresa.setDocumento("88821382000165");
        empresa.setNascimento(LocalDate.now());
        empresa.setEmail("gestaoMurta@gmail.com");
        empresa.setSituacao(AtivoInativoEnum.ATIVO);
        empresa.setTipoPessoa(TipoPessoaEnum.JURIDICA);
        empresa.setNomeFantasia("Murtolandia");
        empresa.setInscricaoEstadual("000001");

        empresaRepository.save(empresa);
        System.out.println("-> Empresa carregada com sucesso!");

    }

    private void createPessoa() {
        List<Pessoa> pessoaList = pessoaRepository.findAll();
        if (CollectionMetodsUtils.isEmpty(pessoaList) || pessoaList.size() == 1) {
            List<Pessoa> pessoas = List.of(
                    new Pessoa("Marcos Leao", "07956285607", LocalDate.now(), AtivoInativoEnum.ATIVO, SexoEnum.MASCULINO, TipoPessoaEnum.FISICA),
                    new Pessoa("Ana Souza", "12345678901", LocalDate.now(), AtivoInativoEnum.ATIVO, SexoEnum.FEMININO, TipoPessoaEnum.FISICA),
                    new Pessoa("Carlos Pereira", "98765432100", LocalDate.now(), AtivoInativoEnum.ATIVO, SexoEnum.MASCULINO, TipoPessoaEnum.FISICA)
            );

            pessoaRepository.saveAll(pessoas);
            System.out.println("-> Pessoas carregados com sucesso!");

        }
    }

    private void createMarca() {
        List<Marca> marcaList = marcaRepository.findAll();
        if (CollectionMetodsUtils.isEmpty(marcaList) || marcaList.size() == 1) {
            List<Marca> marcas = List.of(
                    new Marca( "Samsung"),
                    new Marca("LG")
            );
            marcaRepository.saveAll(marcas);
            System.out.println("-> Marcas carregadas com sucesso!");

        }
    }

    private void createCategoria() {
        List<Categoria> categoriaList = categoriaRepository.findAll();
        if (CollectionMetodsUtils.isEmpty(categoriaList) || categoriaList.size() == 1) {
            List<Categoria> categorias = List.of(
                    new Categoria( "Telefone"),
                    new Categoria("Monitor")
            );
            categoriaRepository.saveAll(categorias);
            System.out.println("-> Categorias carregadas com sucesso!");

        }
    }


    private void createPaises() {
        List<Pais> paisList = paisRepository.findAll();
        if (CollectionMetodsUtils.isEmpty(paisList)) {
            List<Pais> paises = List.of(
                    new Pais("Afeganistão", "AF"),
                    new Pais("Albânia", "AL"),
                    new Pais("Alemanha", "DE"),
                    new Pais("Andorra", "AD"),
                    new Pais("Angola", "AO"),
                    new Pais("Antígua e Barbuda", "AG"),
                    new Pais("Arábia Saudita", "SA"),
                    new Pais("Argélia", "DZ"),
                    new Pais("Argentina", "AR"),
                    new Pais("Armênia", "AM"),
                    new Pais("Austrália", "AU"),
                    new Pais("Áustria", "AT"),
                    new Pais("Azerbaijão", "AZ"),
                    new Pais("Bahamas", "BS"),
                    new Pais("Bahrein", "BH"),
                    new Pais("Bangladesh", "BD"),
                    new Pais("Barbados", "BB"),
                    new Pais("Bélgica", "BE"),
                    new Pais("Belize", "BZ"),
                    new Pais("Benim", "BJ"),
                    new Pais("Bolívia", "BO"),
                    new Pais("Bósnia e Herzegovina", "BA"),
                    new Pais("Botsuana", "BW"),
                    new Pais("Brasil", "BR"),
                    new Pais("Brunei", "BN"),
                    new Pais("Bulgária", "BG"),
                    new Pais("Burkina Faso", "BF"),
                    new Pais("Burundi", "BI"),
                    new Pais("Butão", "BT"),
                    new Pais("Cabo Verde", "CV"),
                    new Pais("Camarões", "CM"),
                    new Pais("Camboja", "KH"),
                    new Pais("Canadá", "CA"),
                    new Pais("Catar", "QA"),
                    new Pais("Cazaquistão", "KZ"),
                    new Pais("Chade", "TD"),
                    new Pais("Chile", "CL"),
                    new Pais("China", "CN"),
                    new Pais("Chipre", "CY"),
                    new Pais("Colômbia", "CO"),
                    new Pais("Comores", "KM"),
                    new Pais("Congo-Brazzaville", "CG"),
                    new Pais("Congo-Kinshasa", "CD"),
                    new Pais("Coreia do Norte", "KP"),
                    new Pais("Coreia do Sul", "KR"),
                    new Pais("Costa do Marfim", "CI"),
                    new Pais("Costa Rica", "CR"),
                    new Pais("Croácia", "HR"),
                    new Pais("Cuba", "CU"),
                    new Pais("Dinamarca", "DK"),
                    new Pais("Djibuti", "DJ"),
                    new Pais("Dominica", "DM"),
                    new Pais("Egito", "EG"),
                    new Pais("El Salvador", "SV"),
                    new Pais("Emirados Árabes Unidos", "AE"),
                    new Pais("Equador", "EC"),
                    new Pais("Eritreia", "ER"),
                    new Pais("Eslováquia", "SK"),
                    new Pais("Eslovênia", "SI"),
                    new Pais("Espanha", "ES"),
                    new Pais("Estados Unidos", "US"),
                    new Pais("Estônia", "EE"),
                    new Pais("Etiópia", "ET"),
                    new Pais("Fiji", "FJ"),
                    new Pais("Filipinas", "PH"),
                    new Pais("Finlândia", "FI"),
                    new Pais("França", "FR"),
                    new Pais("Gabão", "GA"),
                    new Pais("Gâmbia", "GM"),
                    new Pais("Gana", "GH"),
                    new Pais("Geórgia", "GE"),
                    new Pais("Granada", "GD"),
                    new Pais("Grécia", "GR"),
                    new Pais("Guatemala", "GT"),
                    new Pais("Guiana", "GY"),
                    new Pais("Guiné", "GN"),
                    new Pais("Guiné Equatorial", "GQ"),
                    new Pais("Guiné-Bissau", "GW"),
                    new Pais("Haiti", "HT"),
                    new Pais("Honduras", "HN"),
                    new Pais("Hungria", "HU"),
                    new Pais("Iêmen", "YE"),
                    new Pais("Índia", "IN"),
                    new Pais("Indonésia", "ID"),
                    new Pais("Irã", "IR"),
                    new Pais("Iraque", "IQ"),
                    new Pais("Irlanda", "IE"),
                    new Pais("Islândia", "IS"),
                    new Pais("Israel", "IL"),
                    new Pais("Itália", "IT"),
                    new Pais("Jamaica", "JM"),
                    new Pais("Japão", "JP"),
                    new Pais("Jordânia", "JO"),
                    new Pais("Kuwait", "KW"),
                    new Pais("Laos", "LA"),
                    new Pais("Lesoto", "LS"),
                    new Pais("Letônia", "LV"),
                    new Pais("Líbano", "LB"),
                    new Pais("Libéria", "LR"),
                    new Pais("Líbia", "LY"),
                    new Pais("Liechtenstein", "LI"),
                    new Pais("Lituânia", "LT"),
                    new Pais("Luxemburgo", "LU"),
                    new Pais("Macedônia do Norte", "MK"),
                    new Pais("Madagascar", "MG"),
                    new Pais("Malásia", "MY"),
                    new Pais("Malaui", "MW"),
                    new Pais("Maldivas", "MV"),
                    new Pais("Mali", "ML"),
                    new Pais("Malta", "MT"),
                    new Pais("Marrocos", "MA"),
                    new Pais("Maurícia", "MU"),
                    new Pais("Mauritânia", "MR"),
                    new Pais("México", "MX"),
                    new Pais("Mianmar", "MM"),
                    new Pais("Micronésia", "FM"),
                    new Pais("Moçambique", "MZ"),
                    new Pais("Moldávia", "MD"),
                    new Pais("Mônaco", "MC"),
                    new Pais("Mongólia", "MN"),
                    new Pais("Montenegro", "ME"),
                    new Pais("Namíbia", "NA"),
                    new Pais("Nauru", "NR"),
                    new Pais("Nepal", "NP"),
                    new Pais("Nicarágua", "NI"),
                    new Pais("Níger", "NE"),
                    new Pais("Nigéria", "NG"),
                    new Pais("Noruega", "NO"),
                    new Pais("Nova Zelândia", "NZ"),
                    new Pais("Omã", "OM"),
                    new Pais("Países Baixos", "NL"),
                    new Pais("Palau", "PW"),
                    new Pais("Panamá", "PA"),
                    new Pais("Papua-Nova Guiné", "PG"),
                    new Pais("Paquistão", "PK"),
                    new Pais("Paraguai", "PY"),
                    new Pais("Peru", "PE"),
                    new Pais("Polônia", "PL"),
                    new Pais("Portugal", "PT"),
                    new Pais("Quênia", "KE"),
                    new Pais("Quirguistão", "KG"),
                    new Pais("Reino Unido", "GB"),
                    new Pais("República Centro-Africana", "CF"),
                    new Pais("República Dominicana", "DO"),
                    new Pais("República Tcheca", "CZ"),
                    new Pais("Romênia", "RO"),
                    new Pais("Ruanda", "RW"),
                    new Pais("Rússia", "RU"),
                    new Pais("Samoa", "WS"),
                    new Pais("San Marino", "SM"),
                    new Pais("Santa Lúcia", "LC"),
                    new Pais("São Cristóvão e Névis", "KN"),
                    new Pais("São Tomé e Príncipe", "ST"),
                    new Pais("São Vicente e Granadinas", "VC"),
                    new Pais("Senegal", "SN"),
                    new Pais("Serra Leoa", "SL"),
                    new Pais("Sérvia", "RS"),
                    new Pais("Seychelles", "SC"),
                    new Pais("Singapura", "SG"),
                    new Pais("Síria", "SY"),
                    new Pais("Somália", "SO"),
                    new Pais("Sri Lanka", "LK"),
                    new Pais("Suazilândia", "SZ"),
                    new Pais("Sudão", "SD"),
                    new Pais("Sudão do Sul", "SS"),
                    new Pais("Suécia", "SE"),
                    new Pais("Suíça", "CH"),
                    new Pais("Suriname", "SR"),
                    new Pais("Tailândia", "TH"),
                    new Pais("Taiwan", "TW"),
                    new Pais("Tajiquistão", "TJ"),
                    new Pais("Tanzânia", "TZ"),
                    new Pais("Timor-Leste", "TL"),
                    new Pais("Togo", "TG"),
                    new Pais("Tonga", "TO"),
                    new Pais("Trinidad e Tobago", "TT"),
                    new Pais("Tunísia", "TN"),
                    new Pais("Turcomenistão", "TM"),
                    new Pais("Turquia", "TR"),
                    new Pais("Tuvalu", "TV"),
                    new Pais("Ucrânia", "UA"),
                    new Pais("Uganda", "UG"),
                    new Pais("Uruguai", "UY"),
                    new Pais("Uzbequistão", "UZ"),
                    new Pais("Vanuatu", "VU"),
                    new Pais("Vaticano", "VA"),
                    new Pais("Venezuela", "VE"),
                    new Pais("Vietnã", "VN"),
                    new Pais("Zâmbia", "ZM"),
                    new Pais("Zimbábue", "ZW")
            );

            paisRepository.saveAll(paises);
            System.out.println("-> Países carregados com sucesso!");
        }
    }

    private void createEstadosBrasil() {

        List<Estado> estadoList = estadoRepository.findAll();
        if (CollectionMetodsUtils.isEmpty(estadoList)) {


            Pais brasil = paisRepository.findBySigla("BR");

            if (brasil == null) {
                throw new RuntimeException("Brasil não encontrado!");
            }

            List<Estado> estados = List.of(
                    new Estado(brasil, "Acre", "AC", "12"),
                    new Estado(brasil, "Alagoas", "AL", "27"),
                    new Estado(brasil, "Amapá", "AP", "16"),
                    new Estado(brasil, "Amazonas", "AM", "13"),
                    new Estado(brasil, "Bahia", "BA", "29"),
                    new Estado(brasil, "Ceará", "CE", "23"),
                    new Estado(brasil, "Distrito Federal", "DF", "53"),
                    new Estado(brasil, "Espírito Santo", "ES", "32"),
                    new Estado(brasil, "Goiás", "GO", "52"),
                    new Estado(brasil, "Maranhão", "MA", "21"),
                    new Estado(brasil, "Mato Grosso", "MT", "51"),
                    new Estado(brasil, "Mato Grosso do Sul", "MS", "50"),
                    new Estado(brasil, "Minas Gerais", "MG", "31"),
                    new Estado(brasil, "Pará", "PA", "15"),
                    new Estado(brasil, "Paraíba", "PB", "25"),
                    new Estado(brasil, "Paraná", "PR", "41"),
                    new Estado(brasil, "Pernambuco", "PE", "26"),
                    new Estado(brasil, "Piauí", "PI", "22"),
                    new Estado(brasil, "Rio de Janeiro", "RJ", "33"),
                    new Estado(brasil, "Rio Grande do Norte", "RN", "24"),
                    new Estado(brasil, "Rio Grande do Sul", "RS", "43"),
                    new Estado(brasil, "Rondônia", "RO", "11"),
                    new Estado(brasil, "Roraima", "RR", "14"),
                    new Estado(brasil, "Santa Catarina", "SC", "42"),
                    new Estado(brasil, "São Paulo", "SP", "35"),
                    new Estado(brasil, "Sergipe", "SE", "28"),
                    new Estado(brasil, "Tocantins", "TO", "17")
            );

            estadoRepository.saveAll(estados);
            System.out.println("-> Estados do Brasil carregados com sucesso!");
        }
    }

}