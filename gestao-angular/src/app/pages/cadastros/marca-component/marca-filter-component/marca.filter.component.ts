import {Component, Input} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MarcaFilterDTO} from "../../../../shared/dto/filterDTO/marca.filter.dto";
import {TextBoxComponent} from "../../../../shared/components-commons/infra/text-box-component/text.box.component";

@Component({
  selector: 'marca-filter',
  templateUrl: './marca.filter.component.html',
  standalone: true,
  imports: [
    RouterModule,
    TextBoxComponent
  ],
})
export class MarcaFilterComponent {


  @Input()
  filter: MarcaFilterDTO = new MarcaFilterDTO();

}
