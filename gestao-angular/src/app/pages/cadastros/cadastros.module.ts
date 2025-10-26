import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PessoaService} from "../../shared/service/pessoa.service";
import {AngularMaterialModule} from "../../angular.material.module";
import {PessoaComponent} from "./pessoa-component/pessoa.component";

const routes : Routes = [

  {path: 'pessoa', component: PessoaComponent},

]
@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
  ],
  exports:[
    RouterModule
  ],
  providers: [
    PessoaService
  ],
})
export class CadastrosModule { }
