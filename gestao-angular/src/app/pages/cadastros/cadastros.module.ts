import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PessoaService} from "../../shared/service/pessoa.service";
import {AngularMaterialModule} from "../../angular.material.module";
import {PessoaComponent} from "./pessoa-component/pessoa.component";
import {ComponentsCommonsModule} from "../../shared/components-commons/components.commons.module";
import {DatePipe, NgIf, TitleCasePipe} from "@angular/common";
import {PessoaFilterComponent} from "./pessoa-component/pessoa-filter/pessoa.filter.component";
import {FormsModule} from "@angular/forms";
import {PessoaFormComponent} from "./pessoa-component/pessoa-form/pessoa.form.component";

const routes : Routes = [

  {
    path: 'pessoa',
    children: [
      { path: '', component: PessoaComponent },
      { path: 'editar/:id', component: PessoaFormComponent }
    ]
  }


]
@NgModule({
  declarations: [
    PessoaComponent,
    PessoaFilterComponent,
    PessoaFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    ComponentsCommonsModule,
    DatePipe,
    TitleCasePipe,
    FormsModule,
    NgIf
  ],
  exports:[
    RouterModule
  ],
  providers: [
    PessoaService
  ],
})
export class CadastrosModule { }
