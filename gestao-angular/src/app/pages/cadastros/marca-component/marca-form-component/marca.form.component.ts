import {Component, Injector} from "@angular/core";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {Marca} from "../../../../shared/model/marca";
import {MarcaFilterDTO} from "../../../../shared/dto/filterDTO/marca.filter.dto";
import {MarcaService} from "../../../../shared/service/marca.service";
import {ToolbarComponent} from "../../../../shared/components-commons/infra/toolbar-filter-component/toolbar.component";
import {TextBoxComponent} from "../../../../shared/components-commons/infra/text-box-component/text.box.component";
import {AlertService} from "../../../../shared/components-commons/infra/alert-component/alert.service";

@Component({
  selector: 'marca-form-component',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    TextBoxComponent
  ],
  templateUrl: './marca.form.component.html',
})
export class MarcaFormComponent extends CrudPadrao<Marca, MarcaFilterDTO> {

  constructor(injector: Injector,
              private mainService: MarcaService,
              private route: ActivatedRoute,
              private alertService: AlertService
  ) {
    super(injector, "marca");
  }

  override ngOnInit() {
    this.model = new Marca();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mainService.getById(Number(id)).subscribe(marca => {
        if (marca.body) {
          this.model = marca.body as Marca
        }
      });

    }
  }

  override getMainService(): any {
    return this.mainService;
  }
}
