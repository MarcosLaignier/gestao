import {Component, Input} from "@angular/core";
import {AtivoInativoEnum} from "../../../../shared/enum/ativo.inativo.enum";
import {PessoaFilterDTO} from "../../../../shared/dto/filterDTO/pessoa.filter.dto";
import {TipoPessoaEnum} from "../../../../shared/enum/tipo.pessoa.enum";

@Component({
  selector: 'pessoa-filter-component',
  templateUrl: './pessoa.filter.component.html',
})
export class PessoaFilterComponent {

  situacaoEnum = AtivoInativoEnum;
  tipoEnum = TipoPessoaEnum;

  @Input()
  filter: PessoaFilterDTO = new PessoaFilterDTO();



}
