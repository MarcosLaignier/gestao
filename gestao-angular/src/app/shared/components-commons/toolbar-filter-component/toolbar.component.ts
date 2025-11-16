import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'toolbar-filter-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() tituloPagina: string = '';
  @Input() listMode: boolean = true;

  @Output() filtrar = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<void>();
  @Output() limpar = new EventEmitter<void>();
  @Output() fechar = new EventEmitter<void>();

  constructor(private location: Location) {}

  filtrarClick(event: Event) {
    event.preventDefault();
    this.filtrar.emit();
  }

  salvarClick(event: Event) {
    event.preventDefault();
    this.salvar.emit();
  }
  limparClick(event: Event) {
    event.preventDefault();
    this.limpar.emit();
  }

  fecharClick(event: Event) {
    event.preventDefault();
    this.fechar.emit();
    this.location.back();
  }
}
