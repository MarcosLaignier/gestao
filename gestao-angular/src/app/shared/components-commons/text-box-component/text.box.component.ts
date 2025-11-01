import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormFieldBase} from "../../utils/form.field.base";

@Component({
  selector: 'text-box-component',
  templateUrl: './text.box.component.html',
  styleUrls: ['./text.box.component.scss'],

  styles: [':host { display: contents; }']
})
export class TextBoxComponent extends FormFieldBase<string> {
  @Input() colClass: string = 'col-md-2';
  @Input() label: string = ''
  // private _dataField:any;
  //
  //
  // @Input()
  // get dataField() {
  //   return this._dataField;
  // }
  // set dataField(val: any) {
  //   this._dataField = val;
  //   this.dataFieldChange.emit(this._dataField);
  // }
  //
  // @Output() dataFieldChange = new EventEmitter<any>();

}
