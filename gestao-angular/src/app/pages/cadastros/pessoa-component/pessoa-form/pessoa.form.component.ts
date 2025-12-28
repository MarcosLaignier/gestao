import {Component, Injector} from "@angular/core";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {PessoaFilterDTO} from "../../../../shared/dto/filterDTO/pessoa.filter.dto";
import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {Pessoa} from "../../../../shared/model/pessoa";
import {PessoaService} from "../../../../shared/service/pessoa.service";
import {AtivoInativoEnum} from "../../../../shared/enum/ativo.inativo.enum";
import {TipoPessoaEnum} from "../../../../shared/enum/tipo.pessoa.enum";

import {ToolbarComponent} from "../../../../shared/components-commons/toolbar-filter-component/toolbar.component";
import {RadioEnumComponent} from "../../../../shared/components-commons/radio-enum-component/radio.enum.component";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {DateBoxComponent} from "../../../../shared/components-commons/date-box-component/date.box.component";
import {SelectEnumComponent} from "../../../../shared/components-commons/select-enum-component/select.enum.component";
import {TabsComponent} from "../../../../shared/components-commons/tabs-component/tabs.component";
import {TabComponent} from "../../../../shared/components-commons/tabs-component/tab.component";
import {SexoEnum} from "../../../../shared/enum/sexo.enum";
import {Telefone} from "../../../../shared/model/telefone";
import {SwitchComponent} from "../../../../shared/components-commons/switch-component/switch.component";
import {GridComponent} from "../../../../shared/components-commons/grid-column-component/grid.component";
import _ from "lodash";
import {AlertService} from "../../../../shared/components-commons/alert-component/alert.service";


@Component({
  selector: 'pessoa-form-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    RadioEnumComponent,
    TextBoxComponent,
    DateBoxComponent,
    SelectEnumComponent,
    TabsComponent,
    TabComponent,
    SwitchComponent,
    GridComponent
  ],
  templateUrl: './pessoa.form.component.html',
})

export class PessoaFormComponent extends CrudPadrao<Pessoa, PessoaFilterDTO>{

  tipoPessoaEnumType = TipoPessoaEnum;
  situacaoEnumType = AtivoInativoEnum;
  sexoEnumType = SexoEnum;

  contatoTypeGrid = new Telefone();

  telefoneSelected: Telefone = new Telefone();

  constructor(injector: Injector,
              private mainService:PessoaService,
              private router:Router,
              private route: ActivatedRoute,
              private alertService: AlertService
  ) {
    super(injector, "pessoa");
  }

  override getMainService(): any {
    return this.mainService;
  }

  override ngOnInit() {
    this.model = new Pessoa();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mainService.getById(Number(id)).subscribe(pessoa => {
        if(pessoa.body){
          this.model = pessoa.body
        }
      });
    }else{
      this.model.tipoPessoa = TipoPessoaEnum.FISICA;
    }
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
}
