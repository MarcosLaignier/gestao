import {Component} from "@angular/core";

interface MenuItem {
  label: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'side-bar-component',
  templateUrl: './side.bar.component.html',
  styleUrls: ['./side.bar.component.scss']
})
export class SideBarComponent{

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'bi-house',
      route: '/dashboard'
    },
    {
      label: 'Cadastro',
      icon: 'bi-folder2-open',
      children: [
        { label: 'Pessoas', icon: 'bi-person', route: '/cadastro/pessoas' },
        { label: 'Empresas', icon: 'bi-building', route: '/cadastro/empresas' },
        { label: 'Produtos', icon: 'bi-box-seam', route: '/cadastro/produtos' }
      ]
    },
    {
      label: 'Financeiro',
      icon: 'bi-cash-coin',
      children: [
        { label: 'Contas a Pagar', icon: 'bi-arrow-down-circle', route: '/financeiro/pagar' },
        { label: 'Contas a Receber', icon: 'bi-arrow-up-circle', route: '/financeiro/receber' }
      ]
    },
    {
      label: 'Configurações',
      icon: 'bi-gear',
      route: '/configuracoes'
    }
  ];

  // Fecha os outros e abre o clicado
  toggleSubmenu(clickedItem: MenuItem): void {
    this.menuItems.forEach(item => {
      if (item !== clickedItem) item.expanded = false; // fecha os outros
    });
    clickedItem.expanded = !clickedItem.expanded; // alterna o clicado
  }
}
