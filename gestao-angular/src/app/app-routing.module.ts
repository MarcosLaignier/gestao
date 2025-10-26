import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  // Carregando todos os modulos pelo filhos

  {path: 'cadastros', loadChildren: () => import('./pages/cadastros/cadastros.module').then(m => m.CadastrosModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
