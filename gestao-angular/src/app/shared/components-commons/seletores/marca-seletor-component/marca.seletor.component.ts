import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  BaseSelectEntityComponent,
  getSeletorBaseTemplateDefault
} from "../../infra/base-select-entity-component/base.select.entity.component";
import {MarcaService} from "../../../service/marca.service";
import {Marca} from "../../../model/marca";

@Component({
  selector: 'marca-seletor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: getSeletorBaseTemplateDefault(),
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class SelectMarcaComponent extends BaseSelectEntityComponent<Marca> {

  constructor(private marcaService: MarcaService) {
    super();
  }

  protected override getMainService() {
    return this.marcaService;
  }
}

