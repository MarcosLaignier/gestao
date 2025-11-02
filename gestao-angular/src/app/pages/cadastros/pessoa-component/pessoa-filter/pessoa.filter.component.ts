import {Component} from "@angular/core";
import {AtivoInativoEnum} from "../../../../shared/enum/ativo.inativo.enum";

@Component({
  selector: 'pessoa-filter-component',
  templateUrl: './pessoa.filter.component.html',
})
export class PessoaFilterComponent {

  situacaoSelecionada: AtivoInativoEnum | '' = '';
  SituacaoEnum = AtivoInativoEnum;

  tt:any;

  teste() {
    console.log(this.tt)
    console.log(this.situacaoSelecionada)
  }
}
