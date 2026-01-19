import {Component, Input} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CategoriaFilterDto} from "../../../../shared/dto/filterDTO/categoria.filter.dto";
import {TextBoxComponent} from "../../../../shared/components-commons/infra/text-box-component/text.box.component";

@Component({
  selector: 'categoria-filter',
  templateUrl: './categoria.filter.component.html',
  standalone: true,
  imports: [
    RouterModule,
    TextBoxComponent
  ],
})
export class CategoriaFilterComponent {


  @Input()
  filter: CategoriaFilterDto = new CategoriaFilterDto();

}
