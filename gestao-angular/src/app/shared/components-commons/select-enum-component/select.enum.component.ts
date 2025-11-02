import {Component, Input} from '@angular/core';
import {FormFieldBase} from "../../utils/form.field.base";

@Component({
  selector: 'select-enum',
  templateUrl: './select.enum.component.html'
})
export class SelectEnumComponent  extends FormFieldBase<any>{

  @Input() enumObject: any;
  @Input() placeholder: string = 'Selecione';

  get enumOptions() {
    if (!this.enumObject) return [];
    return Object.values(this.enumObject);
  }

}
