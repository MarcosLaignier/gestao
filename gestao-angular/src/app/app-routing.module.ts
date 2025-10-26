import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoaComponent} from "./pages/pessoa-component/pessoa.component";

const routes: Routes = [

  {path: 'pessoa', component: PessoaComponent},
  // {path: 'pages/pessoa/edit', component: PessoaComponent},
  // {path: 'pages/pessoa/edit/:id', component: PessoaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
