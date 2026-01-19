import {Component, Injector} from "@angular/core";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {TipoPessoaEnum} from "../../../shared/enum/tipo.pessoa.enum";
import {Empresa} from "../../../shared/model/empresa";
import {EmpresaFilterDTO} from "../../../shared/dto/filterDTO/empresa.filter.dto";
import {AtivoInativoEnum} from "../../../shared/enum/ativo.inativo.enum";
import {SexoEnum} from "../../../shared/enum/sexo.enum";
import {Telefone} from "../../../shared/model/telefone";
import {Endereco} from "../../../shared/model/endereco";
import {EmpresaService} from "../../../shared/service/empresa.service";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {ViaCepService} from "../../../infra/ws/via.cep.service";
import _ from "lodash";
import {ToolbarComponent} from "../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {RadioEnumComponent} from "../../../shared/components-commons/infra/radio-enum-component/radio.enum.component";
import {TextBoxComponent} from "../../../shared/components-commons/infra/text-box-component/text.box.component";
import {DateBoxComponent} from "../../../shared/components-commons/infra/date-box-component/date.box.component";
import {TabsComponent} from "../../../shared/components-commons/infra/tabs-component/tabs.component";
import {TabComponent} from "../../../shared/components-commons/infra/tabs-component/tab.component";
import {SwitchComponent} from "../../../shared/components-commons/infra/switch-component/switch.component";
import {GridComponent} from "../../../shared/components-commons/infra/grid-column-component/grid.component";
import {
  SelectEnumComponent
} from "../../../shared/components-commons/infra/select-enum-component/select.enum.component";
import {AlertService} from "../../../shared/components-commons/infra/alert-component/alert.service";


@Component({
  selector: 'empresa-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    RadioEnumComponent,
    TextBoxComponent,
    DateBoxComponent,
    TabsComponent,
    TabComponent,
    SwitchComponent,
    GridComponent,
    SelectEnumComponent
  ],
  templateUrl: './empresa.component.html',
})

export class EmpresaComponent extends CrudPadrao<Empresa, EmpresaFilterDTO>{

  tipoPessoaEnumType = TipoPessoaEnum;
  situacaoEnumType = AtivoInativoEnum;
  sexoEnumType = SexoEnum;

  contatoTypeGrid = new Telefone();
  enderecoTypeGrid = new Endereco();
  telefoneSelected: Telefone = new Telefone();
  enderecoSelected: Endereco = new Endereco();

  constructor(injector: Injector,
              private mainService:EmpresaService,
              private route: ActivatedRoute,
              private alertService: AlertService,
              private viaCepService: ViaCepService
  ) {
    super(injector, "empresa");
  }

  override getMainService(): any {
    return this.mainService;
  }

  override ngOnInit() {
    this.mainService.getEmpresa().subscribe(value => {
      if(value?.body && value.body.id){
        this.model = value.body
      }else{
        this.model = new Empresa();
        this.model.tipoPessoa = TipoPessoaEnum.JURIDICA;
        this.model.situacao = AtivoInativoEnum.ATIVO;
        this.model.enderecoList = [];
        this.model.telefoneList = [];
      }
    })
  }

  adicionaContato() {
    if(_.isNil(this.model.telefoneList)){
      this.model.telefoneList = [];
    }
    if(this.validaAdicionaTelefone(this.telefoneSelected)){
      this.model.telefoneList.push(this.telefoneSelected)
      this.telefoneSelected = new Telefone();
    }
  }

  validaAdicionaTelefone(telefoneAdd: Telefone){
    if (!this.telefoneValido(telefoneAdd)) {
      this.alertService.warning('Número de telefone inválido.', 3000);
      return false;
    }

    const existe = this.model.telefoneList.some(t => t.numero.replace(/\D/g, '') === telefoneAdd.numero.replace(/\D/g, ''));

    if (existe) {
      this.alertService.warning('Contato já existente!', 3000);
      return false;
    }

    return true;
  }

  private telefoneValido(telefone: Telefone): boolean {
    if (!telefone?.numero) {
      return false;
    }

    // Removendo tudo que não for número
    const numero = telefone.numero.replace(/\D/g, '');

    // Celular (11 dígitos) ou fixo (10 dígitos)
    if (numero.length != 10 && numero.length !== 11) {
      return false;
    }

    // DDD válido (11 a 99)
    const ddd = Number(numero.substring(0, 2));
    if (ddd < 11 || ddd > 99) {
      return false;
    }

    // Se for celular, deve começar com 9
    if (numero.length == 11 && numero.charAt(2) !== '9') {
      return false;
    }

    return true;
  }

  adicionaEndereco() {
    if(_.isNil(this.model.enderecoList)){
      this.model.enderecoList = [];
    }
    // if(this.validaAdicionaTelefone(this.telefoneSelected)){
    this.model.enderecoList.push(this.enderecoSelected)
    this.enderecoSelected = new Endereco();
    // }
  }

  getCEP(cep: string){
    if(cep?.length == 8){

      this.viaCepService.buscarCep(cep).subscribe( endereco => {
        console.log(endereco)

        if(endereco){
          this.enderecoSelected.cep = endereco.cep;
          this.enderecoSelected.logradouro = endereco.logradouro;
          this.enderecoSelected.bairro = endereco.bairro;
          this.enderecoSelected.cidade = endereco.cidade;
        }
      });
    }
  }
}
