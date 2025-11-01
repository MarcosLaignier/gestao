import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PessoaService} from "../../shared/service/pessoa.service";
import {AngularMaterialModule} from "../../angular.material.module";
import {PessoaComponent} from "./pessoa-component/pessoa.component";
import {ComponentsCommonsModule} from "../../shared/components-commons/components.commons.module";
import {CommonModule, DatePipe, TitleCasePipe} from "@angular/common";
import {PessoaFilterComponent} from "./pessoa-component/pessoa-filter/pessoa.filter.component";
import {AppModule} from "../../app.module";
import {FormsModule} from "@angular/forms";

const routes : Routes = [

  {path: 'pessoa', component: PessoaComponent},

]
@NgModule({
  declarations: [
    PessoaComponent,
    PessoaFilterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    ComponentsCommonsModule,
    DatePipe,
    TitleCasePipe,
    FormsModule
  ],
  exports:[
    RouterModule
  ],
  providers: [
    PessoaService
  ],
})
export class CadastrosModule { }
