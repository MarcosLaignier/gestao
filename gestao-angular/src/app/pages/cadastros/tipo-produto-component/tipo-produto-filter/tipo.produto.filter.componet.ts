import {Component, Input} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SelectEnumComponent} from "../../../../shared/components-commons/select-enum-component/select.enum.component";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {DateBoxComponent} from "../../../../shared/components-commons/date-box-component/date.box.component";
import {TipoProdutoFilterDTO} from "../../../../shared/dto/filterDTO/tipo.produto.dto";

@Component({
  selector: 'tipo-produto-filter',
  templateUrl: './tipo.produto.filter.componet.html',
  standalone: true,
  imports: [
    RouterModule,
    TextBoxComponent
  ],
})
export class TipoProdutoFilterComponet {


  @Input()
  filter: TipoProdutoFilterDTO = new TipoProdutoFilterDTO();


}
