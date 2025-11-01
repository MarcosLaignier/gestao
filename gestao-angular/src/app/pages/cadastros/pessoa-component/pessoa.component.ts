import {Component, Injector} from "@angular/core";
import {PessoaService} from "../../../shared/service/pessoa.service";
import {Pessoa} from "../../../shared/model/pessoa";
import {CrudPadrao} from "../../../shared/utils/crud/crud.padrao";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent extends CrudPadrao<Pessoa, any>{

  displayedColumns = ['nome', 'nascimento', 'documento', 'situacao']
  dataSourceType = Pessoa;

  constructor(injector: Injector,
              private mainService:PessoaService,
              private router:Router) {
    super(injector, "pessoa");
  }

  override getMainService(): any {
    return this.mainService;
  }

}
