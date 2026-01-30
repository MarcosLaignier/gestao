import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  BaseSelectEntityComponent,
  getSeletorBaseTemplateDefault
} from "../../infra/base-select-entity-component/base.select.entity.component";
import {Pessoa} from "../../../model/pessoa";
import {PessoaService} from "../../../service/pessoa.service";

@Component({
  selector: 'pessoa-seletor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: getSeletorBaseTemplateDefault(),
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class PessoaSeletorComponent extends BaseSelectEntityComponent<Pessoa> {

  constructor(private categoriaService: PessoaService) {
    super();
  }

  protected override getMainService() {
    return this.categoriaService;
  }
}

