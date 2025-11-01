import {Component, Input} from "@angular/core";

@Component({
  selector: 'date-box-component',
  templateUrl: './date.box.component.html',
  styleUrls: ['./date.box.component.scss'],

  styles: [':host { display: contents; }']
})
export class DateBoxComponent{

  @Input() colClass: string = 'col-md-2';
  @Input() label: string = ''
  @Input() dataField:any;

}
