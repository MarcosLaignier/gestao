import {Routes} from "@angular/router";

export const COLABORADORES_ROUTES: Routes = [
  {
    path: 'funcao',
    children: [
      {path: '', loadComponent: () => import('./funcao-funcionario-component/funcao.funcionario.component').then(c => c.FuncaoFuncionarioComponent)},
      {path: 'create', loadComponent: () => import('./funcao-funcionario-component/funcao-funcionario-form/funcao.funcionario.form.component').then(c => c.FuncaoFuncionarioFormComponent)},
      {path: 'editar/:id', loadComponent: () => import('./funcao-funcionario-component/funcao-funcionario-form/funcao.funcionario.form.component').then(c => c.FuncaoFuncionarioFormComponent)}
    ]
  },
  {
    path: 'funcionario',
    children: [
      {path: '', loadComponent: () => import('./funcionario-component/funcionario.component').then(c => c.FuncionarioComponent)},
      {path: 'create', loadComponent: () => import('./funcionario-component/funcionario-form/funcionario.form.component').then(c => c.FuncionarioFormComponent)},
      {path: 'editar/:id', loadComponent: () => import('./funcionario-component/funcionario-form/funcionario.form.component').then(c => c.FuncionarioFormComponent)}
    ]
  }
];
