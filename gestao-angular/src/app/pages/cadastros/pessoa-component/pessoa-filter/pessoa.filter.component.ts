import {Component, Input} from "@angular/core";
import {AtivoInativoEnum} from "../../../../shared/enum/ativo.inativo.enum";
import {PessoaFilterDTO} from "../../../../shared/dto/filterDTO/pessoa.filter.dto";
import {TipoPessoaEnum} from "../../../../shared/enum/tipo.pessoa.enum";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SelectEnumComponent} from "../../../../shared/components-commons/select-enum-component/select.enum.component";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {DateBoxComponent} from "../../../../shared/components-commons/date-box-component/date.box.component";

@Component({
  selector: 'pessoa-filter-component',
  templateUrl: './pessoa.filter.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SelectEnumComponent,
    TextBoxComponent,
    DateBoxComponent
  ],
})
export class PessoaFilterComponent {

  situacaoEnum = AtivoInativoEnum;
  tipoEnum = TipoPessoaEnum;

  @Input()
  filter: PessoaFilterDTO = new PessoaFilterDTO();



}
