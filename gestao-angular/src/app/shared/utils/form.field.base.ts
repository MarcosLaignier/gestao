import {Input, Output, EventEmitter, Directive} from '@angular/core';

@Directive()
export abstract class FormFieldBase<T> {

  private _dataField!: T;

  @Input()
  get dataField(): T {
    return this._dataField;
  }
  set dataField(val: T) {
    this._dataField = val;
    this.dataFieldChange.emit(this._dataField);
  }

  @Output() dataFieldChange = new EventEmitter<T>();
}
