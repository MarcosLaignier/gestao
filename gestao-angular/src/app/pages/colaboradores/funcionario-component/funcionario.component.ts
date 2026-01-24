import {Component, Injector} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {FuncionarioFilterComponet} from "./funcionario-filter/funcionario.filter.componet";
import {Funcionario} from "../../../shared/model/funcionario";
import {FuncionarioService} from "../../../shared/service/funcionario.service";
import {FuncionarioFilterDTO} from "../../../shared/dto/filterDTO/funcionario.filter.dto";
import {ToolbarComponent} from "../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {GridComponent} from "../../../shared/components-commons/infra/grid-column-component/grid.component";


@Component({
  selector: 'funcionario-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    FuncionarioFilterComponet,
    GridComponent
  ],
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent extends CrudPadrao<Funcionario, FuncionarioFilterDTO >{

  dataSourceType = new Funcionario();

  constructor(injector: Injector,
              private mainService:FuncionarioService) {
    super(injector, "funcionario");
  }

  override getMainService(): any {
    return this.mainService;
  }

  override ngOnInit() {
    if (!this.filter) {
      this.filter = new FuncionarioFilterDTO();
    }
  }
}
