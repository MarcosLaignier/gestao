import {Component, Input} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FuncionarioFilterDTO} from "../../../../shared/dto/filterDTO/funcionario.filter.dto";
import {PessoaFilterComponent} from "../../../cadastros/pessoa-component/pessoa-filter/pessoa.filter.component";
import {TextBoxComponent} from "../../../../shared/components-commons/infra/text-box-component/text.box.component";

@Component({
  selector: 'funcionario-filter',
  templateUrl: './funcionario.filter.componet.html',
  standalone: true,
  imports: [
    RouterModule,
    PessoaFilterComponent
  ],
})
export class FuncionarioFilterComponet {

  @Input()
  filter: FuncionarioFilterDTO = new FuncionarioFilterDTO();


}
