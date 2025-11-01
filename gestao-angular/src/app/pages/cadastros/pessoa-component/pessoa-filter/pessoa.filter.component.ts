import {Component} from "@angular/core";

@Component({
  selector: 'pessoa-filter-component',
  templateUrl: './pessoa.filter.component.html',
})
export class PessoaFilterComponent {

  tt:any;

  teste() {
    console.log(this.tt)
  }
}
