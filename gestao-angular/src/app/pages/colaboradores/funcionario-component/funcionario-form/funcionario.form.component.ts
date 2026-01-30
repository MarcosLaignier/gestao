import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {Component, Injector} from "@angular/core";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Funcionario} from "../../../../shared/model/funcionario";
import {FuncionarioFilterDTO} from "../../../../shared/dto/filterDTO/funcionario.filter.dto";
import {FuncionarioService} from "../../../../shared/service/funcionario.service";
import {ToolbarComponent} from "../../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {AlertService} from "../../../../shared/components-commons/infra/alert-component/alert.service";
import {
  PessoaSeletorComponent
} from "../../../../shared/components-commons/seletores/pessoa-seletor-component/pessoa.seletor.component";
import {DateBoxComponent} from "../../../../shared/components-commons/infra/date-box-component/date.box.component";
import {PapelEnum} from "../../../../shared/enum/papel.enum";


@Component({
  selector: 'funcionario-form-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    PessoaSeletorComponent,
    DateBoxComponent,
  ],
  templateUrl: './funcionario.form.component.html',
})
export class FuncionarioFormComponent extends CrudPadrao<Funcionario, FuncionarioFilterDTO>{

  constructor(injector: Injector,
              private mainService: FuncionarioService,
              private route: ActivatedRoute,
              private alertService: AlertService
  ) {
    super(injector, "funcionario");
  }

  override ngOnInit() {
    this.model = new Funcionario();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mainService.getById(Number(id)).subscribe(funcionario => {
        if(funcionario.body){
          this.model = funcionario.body as Funcionario
        }
      });

    }else{
      this.model.papel = PapelEnum.FUNCIONARIO;
      this.model.ativo = true;
    }
  }

  override getMainService(): any {
    return this.mainService;
  }

}
