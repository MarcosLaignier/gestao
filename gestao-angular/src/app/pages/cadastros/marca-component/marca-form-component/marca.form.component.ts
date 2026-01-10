import {Component, Injector} from "@angular/core";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {ToolbarComponent} from "../../../../shared/components-commons/toolbar-filter-component/toolbar.component";
import {TextBoxComponent} from "../../../../shared/components-commons/text-box-component/text.box.component";
import {CrudPadrao} from "../../../../shared/utils/crud/crud.padrao";
import {AlertService} from "../../../../shared/components-commons/alert-component/alert.service";
import {Marca} from "../../../../shared/model/marca";
import {MarcaFilterDto} from "../../../../shared/dto/filterDTO/marca.filter.dto";
import {MarcaSercice} from "../../../../shared/service/marca.sercice";

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
export class MarcaFormComponent extends CrudPadrao<Marca, MarcaFilterDto> {

  constructor(injector: Injector,
              private mainService: MarcaSercice,
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
