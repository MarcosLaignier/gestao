import {Component, Injector} from "@angular/core";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {ToolbarComponent} from "../../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {TabsComponent} from "../../../../shared/components-commons/infra/tabs-component/tabs.component";
import {TabComponent} from "../../../../shared/components-commons/infra/tabs-component/tab.component";
import {TextBoxComponent} from "../../../../shared/components-commons/infra/text-box-component/text.box.component";
import {DateBoxComponent} from "../../../../shared/components-commons/infra/date-box-component/date.box.component";
import {TextAreaComponent} from "../../../../shared/components-commons/infra/text-area-component/text.area.component";
import {
  NumberBoxComponent
} from "../../../../shared/components-commons/infra/number-box-component/number.box.component";
import {BadgeComponent} from "../../../../shared/components-commons/infra/badge-component/badge.component";
import {
  SelectMarcaComponent
} from "../../../../shared/components-commons/seletores/marca-seletor-component/marca.seletor.component";
import {
  CategoriaSeletorComponent
} from "../../../../shared/components-commons/seletores/categoria-seletor-component/categoria.seletor.component";
import {Produto} from "../../../../shared/model/produto";
import {ProdutoFilterDTO} from "../../../../shared/dto/filterDTO/produto.filter.dto";
import {ProdutoService} from "../../../../shared/service/produto.service";
import {AlertService} from "../../../../shared/components-commons/infra/alert-component/alert.service";
import {StatusProdutoEnum} from "../../../../shared/enum/status.produto.enum";
import {ProdutoInfoComponent} from "../produto-info-component/produto-info-component";



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
    NumberBoxComponent,
    BadgeComponent,
    SelectMarcaComponent,
    CategoriaSeletorComponent,
    ProdutoInfoComponent
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
      this.mainService.getById(Number(id)).subscribe(produto => {
        if(produto.body){
          this.model = produto.body
        }
      });

    }else{
      this.model.statusAtual = StatusProdutoEnum.DISPONIVEL;
    }
  }

  getColorStatus() {
    switch (this.model.statusAtual) {
      case StatusProdutoEnum.DISPONIVEL:
        return 'success';

      case StatusProdutoEnum.OCUPADO:
        return 'warning';

      case StatusProdutoEnum.MANUTENCAO:
        return 'danger';

      default:
        return 'secondary';
    }
  }

}
