import {Component, Injector} from '@angular/core';
import {ToolbarComponent} from "../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {Reserva} from "../../../shared/model/reserva";
import {ReservaFilterDto} from "../../../shared/dto/filterDTO/reserva.filter.dto";
import {ReservaService} from "../../../shared/service/reserva.service";
import {GridComponent} from "../../../shared/components-commons/infra/grid-column-component/grid.component";
import {ReservaFilterComponent} from "./reserva-filter/reserva.filter.component";
import { ProdutoInfoComponent } from '../../cadastros/produto-component/produto-info-component/produto-info-component';

@Component({
  selector: 'reserva-component',
  standalone: true,
  imports: [
    ToolbarComponent,
    GridComponent,
    ReservaFilterComponent,
    ],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.scss',
})
export class ReservaComponent extends CrudPadrao<Reserva, ReservaFilterDto> {

  dataSourceType = new Reserva();

  constructor(injector: Injector,
              private service: ReservaService) {
    super(injector, 'reserva');
  }

  override getMainService(): any {
    return this.service;
  }


  override ngOnInit() {
    // this.service.getAll().subscribe(d => {
    //   if (d.body) {
    //     this.dataSource = d.body
    //   }
    // })
  }
}
