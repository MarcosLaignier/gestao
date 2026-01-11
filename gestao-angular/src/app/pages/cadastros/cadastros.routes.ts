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
    path: 'marca',
    children: [
      {path: '', loadComponent: () => import('./marca-component/marca.component').then(c => c.MarcaComponent)},
      {path: 'create', loadComponent: () => import('./marca-component/marca-form-component/marca.form.component').then(c => c.MarcaFormComponent)},
      {path: 'editar/:id', loadComponent: () => import('./marca-component/marca-form-component/marca.form.component').then(c => c.MarcaFormComponent)}
    ]
  },
  {
    path: 'categoria',
    children: [
      {path: '', loadComponent: () => import('./categoria-component/categoria.component').then(c => c.CategoriaComponent)},
       {path: 'create', loadComponent: () => import('./categoria-component/categoria-form-component/categoria.form.component').then(c => c.CategoriaFormComponent)},
       {path: 'editar/:id', loadComponent: () => import('./categoria-component/categoria-form-component/categoria.form.component').then(c => c.CategoriaFormComponent)}
    ]
  },
  {
    path: 'tipoProduto',
    children: [
      {path: '', loadComponent: () => import('./tipo-produto-component/tipo.produto.component').then(c => c.TipoProdutoComponent)},
      {path: 'create', loadComponent: () => import('./tipo-produto-component/tipo-produto-form/tipo.produto.form.component').then(c => c.TipoProdutoFormComponent)},
      {path: 'editar/:id', loadComponent: () => import('./tipo-produto-component/tipo-produto-form/tipo.produto.form.component').then(c => c.TipoProdutoFormComponent)}
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
