import {Component, Injector} from "@angular/core";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {RouterModule} from "@angular/router";
import {Produto} from "../../../shared/model/produto";
import {ProdutoFilterDTO} from "../../../shared/dto/filterDTO/produto.filter.dto";
import {ProdutoService} from "../../../shared/service/produto.service";
import {ProdutoFilterComponent} from "./produto-filter-component/produto.filter.component";
import {GridComponent} from "../../../shared/components-commons/infra/grid-column-component/grid.component";
import {ToolbarComponent} from "../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import { ProdutoInfoComponent } from "./produto-info-component/produto-info-component";


@Component({
  selector: 'produto-component',
  standalone: true,
  imports: [
    RouterModule,
    GridComponent,
    ToolbarComponent,
    ProdutoFilterComponent,
    ProdutoInfoComponent
  ],
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent extends CrudPadrao<Produto, ProdutoFilterDTO>{

  dataSourceType = new Produto();

  constructor(injector: Injector,
              private mainService:ProdutoService) {
    super(injector, "produto");
  }

  override getMainService(): any {
    return this.mainService;
  }


  override ngOnInit() {
    if (!this.filter) {
      this.filter = new ProdutoFilterDTO();
    }
  }

}
