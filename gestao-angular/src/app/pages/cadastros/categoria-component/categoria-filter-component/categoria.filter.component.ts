import {Component, Input} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {CategoriaFilterDto} from "../../../../shared/dto/filterDTO/categoria.filter.dto";

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
