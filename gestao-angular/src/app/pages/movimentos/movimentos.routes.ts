import {Routes} from "@angular/router";

export const MOVIMENTOS_ROUTES: Routes = [
  {
    path: 'reserva-produtos',
    children: [
      {path: '', loadComponent: () => import('./reserva-component/reserva.component').then(r => r.ReservaComponent)}
    ]
  },
]
