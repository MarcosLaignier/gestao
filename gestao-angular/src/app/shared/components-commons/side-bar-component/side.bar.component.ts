import {Component} from "@angular/core";
import {RouterModule} from "@angular/router";


interface MenuItem {
  label: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'side-bar-component',
  standalone: true,
  imports: [
    RouterModule],
  templateUrl: './side.bar.component.html',
  styleUrls: ['./side.bar.component.scss']
})
export class SideBarComponent{

  sidebarOpen = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleSubmenu(item: any) {
    item.expanded = !item.expanded;
  }

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
        { label: 'Empresa', icon: 'bi-building', route: '/cadastros/empresa' },
        { label: 'Marca', icon: 'bi bi-badge-tm', route: '/cadastros/marca' },
        { label: 'Tipo Produto', icon: 'bi-box', route: '/cadastros/tipoProduto' },
        { label: 'Pessoas', icon: 'bi-person', route: '/cadastros/pessoa' },
        { label: 'Produtos', icon: 'bi-box-seam', route: '/cadastros/produtos' }
      ]
    },
    {
      label: 'Movimentos',
      icon: 'bi-briefcase',
      children: [
        {label: 'Aluguel de Produtos', icon: 'bi-cart-check', route: '/financeiro/pagar'},
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
}
