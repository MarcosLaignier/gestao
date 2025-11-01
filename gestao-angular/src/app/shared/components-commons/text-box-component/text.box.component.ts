import {Component, Input} from "@angular/core";

@Component({
  selector: 'text-box-component',
  templateUrl: './text.box.component.html',
  styleUrls: ['./text.box.component.scss'],

  styles: [':host { display: contents; }']
})
export class TextBoxComponent{

  @Input() colClass: string = 'col-md-2';
  @Input() label: string = ''
  @Input() dataField:any;

}
