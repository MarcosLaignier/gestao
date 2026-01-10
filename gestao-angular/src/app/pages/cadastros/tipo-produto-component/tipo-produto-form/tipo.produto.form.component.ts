import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {TipoProduto} from "../../../../shared/model/tipoproduto";
import {TipoProdutoFilterDTO} from "../../../../shared/dto/filterDTO/tipo.produto.dto";
import {Component, Injector} from "@angular/core";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {ToolbarComponent} from "../../../../shared/components-commons/toolbar-filter-component/toolbar.component";
import {RadioEnumComponent} from "../../../../shared/components-commons/radio-enum-component/radio.enum.component";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {DateBoxComponent} from "../../../../shared/components-commons/date-box-component/date.box.component";
import {SelectEnumComponent} from "../../../../shared/components-commons/select-enum-component/select.enum.component";
import {TabsComponent} from "../../../../shared/components-commons/tabs-component/tabs.component";
import {TabComponent} from "../../../../shared/components-commons/tabs-component/tab.component";
import {SwitchComponent} from "../../../../shared/components-commons/switch-component/switch.component";
import {GridComponent} from "../../../../shared/components-commons/grid-column-component/grid.component";
import {AlertService} from "../../../../shared/components-commons/alert-component/alert.service";
import {ViaCepService} from "../../../../infra/ws/via.cep.service";
import {TipoProdutoService} from "../../../../shared/service/tipoprodutoservice";
import {Pessoa} from "../../../../shared/model/pessoa";
import {TipoPessoaEnum} from "../../../../shared/enum/tipo.pessoa.enum";


@Component({
  selector: 'tipo-produto-form-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    TextBoxComponent
  ],
  templateUrl: './tipo.produto.form.component.html',
})
export class TipoProdutoFormComponent extends CrudPadrao<TipoProduto, TipoProdutoFilterDTO>{

  constructor(injector: Injector,
              private mainService: TipoProdutoService,
              private route: ActivatedRoute,
              private alertService: AlertService
  ) {
    super(injector, "tipoProduto");
  }

  override ngOnInit() {
    this.model = new TipoProduto();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mainService.getById(Number(id)).subscribe(tipoProduto => {
        if(tipoProduto.body){
          this.model = tipoProduto.body as TipoProduto
        }
      });

    }
  }

  override getMainService(): any {
    return this.mainService;
  }

}
