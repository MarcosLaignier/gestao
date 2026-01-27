import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cadastros',
    loadChildren: () =>
      import('./pages/cadastros/cadastros.routes')
        .then(m => m.CADASTROS_ROUTES)
  },
  {
    path: 'pessoal',
    loadChildren: () =>
      import('./pages/colaboradores/colaboradores.routes')
        .then(m => m.COLABORADORES_ROUTES)
  },
  {
    path: 'movimentos',
    loadChildren: () =>
      import('./pages/movimentos/movimentos.routes')
        .then(m => m.MOVIMENTOS_ROUTES)
  },
];
