import {Component} from "@angular/core";
import {FormFieldBase} from "../../utils/form.field.base";

@Component({
  selector: 'text-box-component',
  templateUrl: './text.box.component.html',
  styleUrls: ['./text.box.component.scss'],

  styles: [':host { display: contents; }']
})
export class TextBoxComponent extends FormFieldBase<string> {

}
