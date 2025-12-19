import {Component, Injector} from "@angular/core";
import {PessoaService} from "../../../shared/service/pessoa.service";
import {Pessoa} from "../../../shared/model/pessoa";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {Router, RouterModule} from "@angular/router";
import {PessoaFilterDTO} from "../../../shared/dto/filterDTO/pessoa.filter.dto";
import {CommonModule} from "@angular/common";
import {ToolbarComponent} from "../../../shared/components-commons/toolbar-filter-component/toolbar.component";
import {PessoaFilterComponent} from "./pessoa-filter/pessoa.filter.component";
import {GridComponent} from "../../../shared/components-commons/grid-column-component/grid.component";
import {SelectEnumComponent} from "../../../shared/components-commons/select-enum-component/select.enum.component";


@Component({
  selector: 'pessoa-component',
  standalone: true,
  imports: [
    CommonModule,
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

  displayedColumns = ['nome', 'nascimento','tipoPessoa', 'documento', 'situacao']
  dataSourceType = Pessoa;

  constructor(injector: Injector,
              private mainService:PessoaService,
              private router:Router) {
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
