import {Component, Input} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FuncionarioFilterDTO} from "../../../../shared/dto/filterDTO/funcionario.filter.dto";
import {PessoaFilterComponent} from "../../../cadastros/pessoa-component/pessoa-filter/pessoa.filter.component";
import {DateBoxComponent} from "../../../../shared/components-commons/infra/date-box-component/date.box.component";

@Component({
  selector: 'funcionario-filter',
  templateUrl: './funcionario.filter.componet.html',
  standalone: true,
  imports: [
    RouterModule,
    PessoaFilterComponent,
    DateBoxComponent
  ],
})
export class FuncionarioFilterComponet {

  @Input()
  filter: FuncionarioFilterDTO = new FuncionarioFilterDTO();


}
