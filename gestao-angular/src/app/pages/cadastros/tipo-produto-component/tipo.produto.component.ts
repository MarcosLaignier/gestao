import {Component, Injector} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ToolbarComponent} from "../../../shared/components-commons/toolbar-filter-component/toolbar.component";
import {GridComponent} from "../../../shared/components-commons/grid-column-component/grid.component";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {TipoProduto} from "../../../shared/model/tipoproduto";
import {TipoProdutoFilterDTO} from "../../../shared/dto/filterDTO/tipo.produto.dto";
import {TipoProdutoService} from "../../../shared/service/tipoprodutoservice";
import {TipoProdutoFilterComponet} from "./tipo-produto-filter/tipo.produto.filter.componet";

@Component({
  selector: 'tipo-produto-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    TipoProdutoFilterComponet,
    GridComponent
  ],
  templateUrl: './tipo.produto.component.html',
  styleUrls: ['./tipo.produto.component.scss']
})
export class TipoProdutoComponent extends CrudPadrao<TipoProduto, TipoProdutoFilterDTO >{

  dataSourceType = new TipoProduto();

  constructor(injector: Injector,
              private mainService:TipoProdutoService) {
    super(injector, "tipoProduto");
  }

  override getMainService(): any {
    return this.mainService;
  }

  override ngOnInit() {
    if (!this.filter) {
      this.filter = new TipoProdutoFilterDTO();
    }
  }


}
