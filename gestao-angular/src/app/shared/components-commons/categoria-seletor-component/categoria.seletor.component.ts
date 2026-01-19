import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  BaseSelectEntityComponent,
  getSeletorBaseTemplateDefault
} from "../base-select-entity-component/base.select.entity.component";
import {Categoria} from "../../model/categoria";
import {CategoriaService} from "../../service/categoria.service";

@Component({
  selector: 'categoria-seletor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: getSeletorBaseTemplateDefault(),
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class CategoriaSeletorComponent extends BaseSelectEntityComponent<Categoria> {

  constructor(private categoriaService: CategoriaService) {
    super();
  }

  protected override getMainService() {
    return this.categoriaService;
  }
}

