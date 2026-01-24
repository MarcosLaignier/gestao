import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {Component, Injector} from "@angular/core";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {FuncaoFuncionario} from "../../../../shared/model/funcao.funcionario";
import {FuncaoFuncionarioFilterDTO} from "../../../../shared/dto/filterDTO/funcao.funcionario.filter.dto";
import {FuncaoFuncionarioService} from "../../../../shared/service/funcao.funcionario.service";
import {ToolbarComponent} from "../../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {TextBoxComponent} from "../../../../shared/components-commons/infra/text-box-component/text.box.component";
import {SwitchComponent} from "../../../../shared/components-commons/infra/switch-component/switch.component";
import {AlertService} from "../../../../shared/components-commons/infra/alert-component/alert.service";


@Component({
  selector: 'funcao-funcionario-form-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    TextBoxComponent,
    SwitchComponent
  ],
  templateUrl: './funcao.funcionario.form.component.html',
})
export class FuncaoFuncionarioFormComponent extends CrudPadrao<FuncaoFuncionario, FuncaoFuncionarioFilterDTO>{

  constructor(injector: Injector,
              private mainService: FuncaoFuncionarioService,
              private route: ActivatedRoute,
              private alertService: AlertService
  ) {
    super(injector, "tipoProduto");
  }

  override ngOnInit() {
    this.model = new FuncaoFuncionario();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mainService.getById(Number(id)).subscribe(funcaoFuncionario => {
        if(funcaoFuncionario.body){
          this.model = funcaoFuncionario.body as FuncaoFuncionario
        }
      });

    }
  }

  override getMainService(): any {
    return this.mainService;
  }

}
