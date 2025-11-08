import {Component, Input} from '@angular/core';
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

  ngOnInit() {

    // Pega as chaves do primeiro objeto para gerar colunas caso nao tenha colunas
    if (this.dataSource.length > 0 && _.isEmpty(this.columns)) {
      this.columns = Object.keys(this.dataSource[0]);
    }
  }

  formatValue(row: any, key: string) {
    let value = row[key];

    // Se for string e parecer uma data, converte
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
      value = new Date(value);
    }

    if (value instanceof Date) {
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
}
