import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as _ from 'lodash';
import {startCase} from 'lodash';

@Component({
  selector: 'grid-component',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() typeDataSource:any;
  @Input() dataSource: any[] = [];
  @Input() columns: string[] = [];

  @Output() dblClickLine = new EventEmitter<any>();

  ngOnInit() {

    // TODO:(EM IMPLEMENTACAO FUTURA)  Pegar as chaves do primeiro objeto para gerar colunas caso nao tenha colunas
    if (this.dataSource.length > 0 && _.isEmpty(this.columns)) {
      this.columns = Object.keys(this.dataSource[0]);
    }
  }

  formatValue(row: any, key: string) {
    let value = row[key];

    // Se for string no formato "yyyy-MM-dd", to criando a data localmente
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      const [year, month, day] = value.split('-').map(Number);
      value = new Date(year, month - 1, day);
    }

    if (value instanceof Date && !isNaN(value.getTime())) {
      const d = value.getDate().toString().padStart(2, '0');
      const m = (value.getMonth() + 1).toString().padStart(2, '0');
      const y = value.getFullYear();
      return `${d}-${m}-${y}`;
    }

    return value;
  }

  formatTitle(col: string): string {
    if (!col) return '';
    return startCase(col.replace(/[._]/g, ' '));
  }

  editItem(row: any) {
    this.dblClickLine.emit(row);
  }
}
