import {Component, Injector} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {Marca} from "../../../shared/model/marca";
import {MarcaFilterDTO} from "../../../shared/dto/filterDTO/marca.filter.dto";
import {MarcaService} from "../../../shared/service/marca.service";
import {MarcaFilterComponent} from "./marca-filter-component/marca.filter.component";
import {ToolbarComponent} from "../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {GridComponent} from "../../../shared/components-commons/infra/grid-column-component/grid.component";

@Component({
  selector: 'marca-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    GridComponent,
    MarcaFilterComponent,
  ],
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent extends CrudPadrao<Marca, MarcaFilterDTO >{

  dataSourceType = new Marca();

  constructor(injector: Injector,
              private mainService:MarcaService) {
    super(injector, "marca");
  }

  override getMainService(): any {
    return this.mainService;
  }

  override ngOnInit() {
    if (!this.filter) {
      this.filter = new MarcaFilterDTO();
    }
  }
}
