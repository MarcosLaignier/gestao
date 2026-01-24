import {Component, Input} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FuncaoFuncionarioFilterDTO} from "../../../../shared/dto/filterDTO/funcao.funcionario.filter.dto";
import {TextBoxComponent} from "../../../../shared/components-commons/infra/text-box-component/text.box.component";

@Component({
  selector: 'funcao-funcionario-filter',
  templateUrl: './funcao.funcionario.filter.componet.html',
  standalone: true,
  imports: [
    RouterModule,
    TextBoxComponent
  ],
})
export class FuncaoFuncionarioFilterComponet {

  @Input()
  filter: FuncaoFuncionarioFilterDTO = new FuncaoFuncionarioFilterDTO();


}
