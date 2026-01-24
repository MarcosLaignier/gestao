import {Component, Injector} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FuncaoFuncionarioFilterComponet} from "./funcao-funcionario-filter/funcao.funcionario.filter.componet";
import {FuncaoFuncionario} from "../../../shared/model/funcao.funcionario";
import {FuncaoFuncionarioFilterDTO} from "../../../shared/dto/filterDTO/funcao.funcionario.filter.dto";
import {FuncaoFuncionarioService} from "../../../shared/service/funcao.funcionario.service";
import {ToolbarComponent} from "../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {GridComponent} from "../../../shared/components-commons/infra/grid-column-component/grid.component";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";

@Component({
  selector: 'funcao-funcionario-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    FuncaoFuncionarioFilterComponet,
    GridComponent
  ],
  templateUrl: './funcao.funcionario.component.html',
  styleUrls: ['./funcao.funcionario.component.scss']
})
export class FuncaoFuncionarioComponent extends CrudPadrao<FuncaoFuncionario, FuncaoFuncionarioFilterDTO >{

  dataSourceType = new FuncaoFuncionario();

  constructor(injector: Injector,
              private mainService:FuncaoFuncionarioService) {
    super(injector, "funcao-funcionario");
  }

  override getMainService(): any {
    return this.mainService;
  }

  override ngOnInit() {
    if (!this.filter) {
      this.filter = new FuncaoFuncionarioFilterDTO();
    }
  }
}
