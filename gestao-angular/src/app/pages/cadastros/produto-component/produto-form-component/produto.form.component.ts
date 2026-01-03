import {Component, Injector} from "@angular/core";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {AlertService} from "../../../../shared/components-commons/alert-component/alert.service";
import {ViaCepService} from "../../../../infra/ws/via.cep.service";
import {ProdutoService} from "../../../../shared/service/produto.service";
import {Produto} from "../../../../shared/model/produto";
import {ProdutoFilterDTO} from "../../../../shared/dto/filterDTO/produto.filter.dto";
import {ToolbarComponent} from "../../../../shared/components-commons/toolbar-filter-component/toolbar.component";
import {TabsComponent} from "../../../../shared/components-commons/tabs-component/tabs.component";
import {TabComponent} from "../../../../shared/components-commons/tabs-component/tab.component";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {DateBoxComponent} from "../../../../shared/components-commons/date-box-component/date.box.component";
import {TextAreaComponent} from "../../../../shared/components-commons/text-area-component/text.area.component";
import {NumberBoxComponent} from "../../../../shared/components-commons/number-box-component/number.box.component";


@Component({
  selector: 'produto-form-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    TabsComponent,
    TabComponent,
    TextBoxComponent,
    DateBoxComponent,
    TextAreaComponent,
    NumberBoxComponent
  ],
  templateUrl: './produto.form.component.html',
})

export class ProdutoFormComponent extends CrudPadrao<Produto, ProdutoFilterDTO>{


  constructor(injector: Injector,
              private mainService:ProdutoService,
              private route: ActivatedRoute,
              private alertService: AlertService,
  ) {
    super(injector, "produto");
  }

  override getMainService(): any {
    return this.mainService;
  }

  override ngOnInit() {
    this.model = new Produto();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mainService.getById(Number(id)).subscribe(pessoa => {
        if(pessoa.body){
          this.model = pessoa.body
        }
      });

    }else{

    }
  }


}
