import {Component, Injector} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ToolbarComponent} from "../../../shared/components-commons/toolbar-filter-component/toolbar.component";
import {GridComponent} from "../../../shared/components-commons/grid-column-component/grid.component";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {Categoria} from "../../../shared/model/categoria";
import {CategoriaFilterDto} from "../../../shared/dto/filterDTO/categoria.filter.dto";
import {CategoriaSercice} from "../../../shared/service/categoria.service";
import {CategoriaFilterComponent} from "./categoria-filter-component/categoria.filter.component";

@Component({
  selector: 'categoria-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    GridComponent,
    CategoriaFilterComponent,
  ],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent extends CrudPadrao<Categoria, CategoriaFilterDto >{

  dataSourceType = new Categoria();

  constructor(injector: Injector,
              private mainService:CategoriaSercice) {
    super(injector, "categoria");
  }

  override getMainService(): any {
    return this.mainService;
  }

  override ngOnInit() {
    if (!this.filter) {
      this.filter = new CategoriaFilterDto();
    }
  }
}
