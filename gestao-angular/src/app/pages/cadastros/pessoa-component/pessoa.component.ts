import {Component, Injector} from "@angular/core";
import {PessoaService} from "../../../shared/service/pessoa.service";
import {Pessoa} from "../../../shared/model/pessoa";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {Router, RouterModule} from "@angular/router";
import {PessoaFilterDTO} from "../../../shared/dto/filterDTO/pessoa.filter.dto";

import {PessoaFilterComponent} from "./pessoa-filter/pessoa.filter.component";
import {ToolbarComponent} from "../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {GridComponent} from "../../../shared/components-commons/infra/grid-column-component/grid.component";


@Component({
  selector: 'pessoa-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    PessoaFilterComponent,
    GridComponent,
    PessoaFilterComponent
],
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent extends CrudPadrao<Pessoa, PessoaFilterDTO>{

  dataSourceType = new Pessoa();

  constructor(injector: Injector,
              private mainService:PessoaService) {
    super(injector, "pessoa");
  }

  override getMainService(): any {
    return this.mainService;
  }


  override ngOnInit() {
    if (!this.filter) {
      this.filter = new PessoaFilterDTO();
    }
  }

}
