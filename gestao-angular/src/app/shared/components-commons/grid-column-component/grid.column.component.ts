import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-column',
  templateUrl: './grid.column.component.html',
  styleUrls: ['./grid.column.component.scss']
})
export class GridColumnComponent {
  /** Dados do item dessa coluna */
  @Input() dataField: any;

  /** Classe CSS opcional para a coluna */
  @Input() className: string = '';
}
