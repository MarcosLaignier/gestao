import {Component, Input} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {MarcaFilterDTO} from "../../../../shared/dto/filterDTO/marca.filter.dto";

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
