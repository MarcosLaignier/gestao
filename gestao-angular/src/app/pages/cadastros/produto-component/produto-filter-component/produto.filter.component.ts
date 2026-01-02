import {Component, Input} from "@angular/core";

import {RouterModule} from "@angular/router";
import {SelectEnumComponent} from "../../../../shared/components-commons/select-enum-component/select.enum.component";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {DateBoxComponent} from "../../../../shared/components-commons/date-box-component/date.box.component";
import {StatusProdutoEnum} from "../../../../shared/enum/status.produto.enum";
import {ProdutoFilterDTO} from "../../../../shared/dto/filterDTO/produto.filter.dto";

@Component({
  selector: 'produto-filter-component',
  templateUrl: './produto.filter.component.html',
  standalone: true,
  imports: [
    RouterModule,
    SelectEnumComponent,
    TextBoxComponent,
    DateBoxComponent
  ],
})
export class ProdutoFilterComponent {

  statusProdutoEnum = StatusProdutoEnum;

  @Input()
  filter: ProdutoFilterDTO = new ProdutoFilterDTO();

}
