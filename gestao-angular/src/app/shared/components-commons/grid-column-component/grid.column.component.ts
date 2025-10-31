import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-column',
  templateUrl: './grid.column.component.html',
  styleUrls: ['./grid.column.component.scss']
})
export class GridColumnComponent {

  @Input()
  dataSource: any[] = [];
  @Input()
  columns: string[] = [];

  ngOnInit() {
    // Exemplo de dataSource

    // Pega as chaves do primeiro objeto para gerar colunas
    if (this.dataSource.length > 0) {
      this.columns = Object.keys(this.dataSource[0]);
    }
  }

  formatValue(row: any, key: string) {
    const value = row[key];

    if (value instanceof Date) {
      return new Intl.DateTimeFormat('pt-BR').format(value); // formata data
    }

    if (typeof value === 'string') {
      return value.charAt(0).toUpperCase() + value.slice(1); // titlecase simples
    }

    return value;
  }
}
