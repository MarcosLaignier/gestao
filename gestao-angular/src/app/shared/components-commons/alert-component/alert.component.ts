import {Component, Input} from "@angular/core";

@Component({
  selector: 'alert-component',
  templateUrl: './alert.component.html',
})
// styleUrls: ['./alert.component.scss']

export class AlertComponent {

  private _textAlert : string = 'Salvo com sucesso';


  get textAlert(): string {
    return this._textAlert;
  }

  @Input()
  set textAlert(value: string) {
    this._textAlert = value;
    this.classAlert = 'alert alert-' + value;
  }

  /** Valores Aceitos
   * success
   * danger
   * warning
   * info
   */
  @Input() typeAlert : string = 'success'

  classAlert = 'alert alert-success'
}
