import {map, Observable} from "rxjs";
import {Pessoa} from "../../../model/pessoa";
import {PessoaService} from "../../../service/pessoa.service";
import {Component, ElementRef} from "@angular/core";
import {
  BaseAutocompleteEntityComponent, getAutocompleteBaseTemplate
} from "../../infra/base-autocomplete-entity-component/base.autocomplete.entity.component";
import {PessoaFilterDTO} from "../../../dto/filterDTO/pessoa.filter.dto";
import {TextBoxComponent} from "../../infra/text-box-component/text.box.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'pessoa-autocomplete',
  template: getAutocompleteBaseTemplate(),
  imports:[
    TextBoxComponent,
    NgClass
  ], styles: [`
    :host {
      display: contents;
    }
  `]
})
export class PessoaAutoCompleteComponent extends BaseAutocompleteEntityComponent<Pessoa> {

  constructor(
    eRef: ElementRef,
    private pessoaService: PessoaService
  ) {
    super(eRef);
  }

  protected load(term: string): Observable<Pessoa[]> {
    let filter: PessoaFilterDTO = new PessoaFilterDTO();
    filter.nome = term;
    return this.pessoaService.getByFiltro(filter).pipe(map(res => res.body ?? []));
  }


  protected override onNoSelectedAndBlur(query: string): void {
    const confirmar = confirm(
      `Deseja criar uma nova pessoa com o nome "${query}"?`
    );

    if (confirmar) {
      // this.criarPessoa.emit(query);
    } else {
      this.textBoxData = '';
    }
  }
}
