import {Component, Input} from "@angular/core";
import {FormFieldBase} from "../../utils/form.field.base";

@Component({
  selector: 'date-box-component',
  templateUrl: './date.box.component.html',

  styles: [':host { display: contents; }']
})
export class DateBoxComponent extends FormFieldBase<Date> {
  @Input() colClass: string = 'col-md-2';
  @Input() label: string = ''

}
