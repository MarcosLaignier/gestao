import {Component, Input} from "@angular/core";
import {AtivoInativoEnum} from "../../../../shared/enum/ativo.inativo.enum";
import {PessoaFilterDTO} from "../../../../shared/dto/filterDTO/pessoa.filter.dto";

@Component({
  selector: 'pessoa-filter-component',
  templateUrl: './pessoa.filter.component.html',
})
export class PessoaFilterComponent {

  SituacaoEnum = AtivoInativoEnum;

  @Input()
  filter: PessoaFilterDTO = new PessoaFilterDTO();



}
