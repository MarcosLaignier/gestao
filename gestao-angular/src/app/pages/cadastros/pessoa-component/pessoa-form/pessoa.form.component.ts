import {Component, Injector} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PessoaFilterDTO} from "../../../../shared/dto/filterDTO/pessoa.filter.dto";
import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {Pessoa} from "../../../../shared/model/pessoa";
import {PessoaService} from "../../../../shared/service/pessoa.service";
import {AtivoInativoEnum} from "../../../../shared/enum/ativo.inativo.enum";


@Component({
  selector: 'pessoa-form-component',
  templateUrl: './pessoa.form.component.html',
})
// styleUrls: ['./pessoa.component.scss']

export class PessoaFormComponent extends CrudPadrao<Pessoa, PessoaFilterDTO>{

  SituacaoEnum = AtivoInativoEnum;


  constructor(injector: Injector,
              private mainService:PessoaService,
              private router:Router,
              private route: ActivatedRoute
  ) {
    super(injector, "pessoa");
  }

  override getMainService(): any {
    return this.mainService;
  }

  override ngOnInit() {
    this.model = new Pessoa();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mainService.getById(Number(id)).subscribe(pessoa => {
        if(pessoa.body){
          this.model = pessoa.body
        }
      });
    }
  }

}
