import {Component, Input} from "@angular/core";
import {AtivoInativoEnum} from "../../../../shared/enum/ativo.inativo.enum";
import {PessoaFilterDTO} from "../../../../shared/dto/filterDTO/pessoa.filter.dto";

@Component({
  selector: 'pessoa-filter-component',
  templateUrl: './pessoa.filter.component.html',
})
export class PessoaFilterComponent {

  situacaoSelecionada: AtivoInativoEnum | '' = '';
  SituacaoEnum = AtivoInativoEnum;

  tt:any;

  @Input()
  filter: PessoaFilterDTO = new PessoaFilterDTO();



}
