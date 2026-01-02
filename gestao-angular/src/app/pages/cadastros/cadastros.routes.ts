import {Routes} from "@angular/router";

export const CADASTROS_ROUTES: Routes = [
  {
    path: 'empresa',
    children: [
      {path: '', loadComponent: () => import('./empresa-component/empresa.component').then(c => c.EmpresaComponent)},
      {path: 'editar/:id', loadComponent: () => import('./empresa-component/empresa.component').then(c => c.EmpresaComponent)}
    ]
  },
  {
    path: 'produtos',
    children: [
      {path: '', loadComponent: () => import('./produto-component/produto.component').then(c => c.ProdutoComponent)},
      {path: 'create', loadComponent: () => import('./produto-component/produto-form-component/produto.form.component').then(c => c.ProdutoFormComponent)},
      {path: 'editar/:id', loadComponent: () => import('./produto-component/produto-form-component/produto.form.component').then(c => c.ProdutoFormComponent)}
    ]
  },
  {
    path: 'pessoa',
    children: [
      {path: '', loadComponent: () => import('./pessoa-component/pessoa.component').then(c => c.PessoaComponent)},
      {path: 'create', loadComponent: () => import('./pessoa-component/pessoa-form/pessoa.form.component').then(c => c.PessoaFormComponent)},
      {path: 'editar/:id', loadComponent: () => import('./pessoa-component/pessoa-form/pessoa.form.component').then(c => c.PessoaFormComponent)}
    ]
  }
];
