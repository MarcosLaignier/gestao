import {Component, Injector} from "@angular/core";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {ToolbarComponent} from "../../../../shared/components-commons/toolbar-filter-component/toolbar.component";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {AlertService} from "../../../../shared/components-commons/alert-component/alert.service";
import {Categoria} from "../../../../shared/model/categoria";
import {CategoriaFilterDto} from "../../../../shared/dto/filterDTO/categoria.filter.dto";
import {CategoriaService} from "../../../../shared/service/categoria.service";

@Component({
  selector: 'categoria-form-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    TextBoxComponent
  ],
  templateUrl: './categoria.form.component.html',
})
export class CategoriaFormComponent extends CrudPadrao<Categoria, CategoriaFilterDto> {

  constructor(injector: Injector,
              private mainService: CategoriaService,
              private route: ActivatedRoute,
              private alertService: AlertService
  ) {
    super(injector, "categoria");
  }

  override ngOnInit() {
    this.model = new Categoria();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mainService.getById(Number(id)).subscribe(categoria => {
        if (categoria.body) {
          this.model = categoria.body as Categoria
        }
      });

    }
  }

  override getMainService(): any {
    return this.mainService;
  }
}
