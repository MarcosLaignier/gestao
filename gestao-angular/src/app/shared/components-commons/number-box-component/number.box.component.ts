import {Component} from "@angular/core";
import {FormFieldBase} from "../../utils/form.field.base";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ToolbarComponent} from "../toolbar-filter-component/toolbar.component";
import {PessoaFilterComponent} from "../../../pages/cadastros/pessoa-component/pessoa-filter/pessoa.filter.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'number-box-component',
  standalone:true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './number.box.component.html',
  styleUrls: ['./number.box.component.scss'],
})
export class NumberBoxComponent extends FormFieldBase<number> {

}
