import { Routes } from '@angular/router';

export const CADASTROS_ROUTES: Routes = [
  {
    path: 'pessoa',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pessoa-component/pessoa.component')
            .then(c => c.PessoaComponent)
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./pessoa-component/pessoa-form/pessoa.form.component')
            .then(c => c.PessoaFormComponent)
      }
    ]
  }
];
