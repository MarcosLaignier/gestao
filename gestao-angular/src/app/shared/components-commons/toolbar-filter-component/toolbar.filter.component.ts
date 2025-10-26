import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'toolbar-filter-component',
  templateUrl: './toolbar.filter.component.html',
  styleUrls: ['./toolbar.filter.component.scss']
})
export class ToolbarFilterComponent {
  @Output() filtrar = new EventEmitter<void>();
  @Output() limpar = new EventEmitter<void>();
  @Output() fechar = new EventEmitter<void>();

  filtrarClick(event: Event) {
    event.preventDefault();
    this.filtrar.emit();
  }

  limparClick(event: Event) {
    event.preventDefault();
    this.limpar.emit();
  }

  fecharClick(event: Event) {
    event.preventDefault();
    this.fechar.emit();
  }
}
