import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
  imports: [RouterModule],
  templateUrl: './side.bar.component.html',
  styleUrls: ['./side.bar.component.scss']
})
export class SideBarComponent implements OnInit {

  sidebarOpen = true;
  isMobile = false;

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'bi-house', route: '/dashboard' },

    {
      label: 'Cadastros Base',
      icon: 'bi-box',
      children: [
        { label: 'Empresa', icon: 'bi-building', route: '/cadastros/empresa' },
        { label: 'Marcas', icon: 'bi-badge-tm', route: '/cadastros/marca' },
        { label: 'Categorias', icon: 'bi-tags', route: '/cadastros/categoria' },
        { label: 'Tipo de Produto', icon: 'bi-box', route: '/cadastros/tipoProduto' },
        { label: 'Produtos', icon: 'bi-box-seam', route: '/cadastros/produtos' }

      ]
    },

    {
      label: 'Pessoas',
      icon: 'bi-people',
      children: [
        {label: 'Cadastro de Clientes', icon: 'bi-person-check', route: '/pessoas/clientes'},
        {label: 'Cadastro de Fornecedores', icon: 'bi-building-check', route: '/pessoas/fornecedores'},
        {label: 'Pessoas', icon: 'bi-person-check', route: '/cadastros/pessoa'}
      ]
    },
    {
      label: 'Colaboradores',
      icon: 'bi-people-fill',
      children: [
        { label: 'Funções / Cargos', icon: 'bi-diagram-3', route: '/pessoal/funcao' },
        { label: 'Funcionários', icon: 'bi-person-badge', route: '/pessoal/funcionario' }
      ]
    },
    {
      label: 'Movimentações',
      icon: 'bi-arrow-left-right',
      children: [
        {label: 'Reserva de Produtos', icon: 'bi-bookmark-check', route: '/movimentos/reserva-produtos'},
        {label: 'Aluguel de Produtos', icon: 'bi-clipboard-check', route: '/movimentos/aluguel-produtos'},
        {label: 'Devolução de Produtos', icon: 'bi-arrow-return-left', route: '/movimentos/devolucao-produtos'},
        {label: 'Manutenções', icon: 'bi-tools', route: '/movimentos/manutencoes'},
        {label: 'Monitor de Produtos', icon: 'bi-graph-up', route: '/movimentos/monitor-produtos'}
      ]
    },

    {
      label: 'Financeiro',
      icon: 'bi-cash-stack',
      children: [
        { label: 'Contas a Pagar', icon: 'bi-arrow-down-circle', route: '/financeiro/pagar' },
        { label: 'Contas a Receber', icon: 'bi-arrow-up-circle', route: '/financeiro/receber' }
      ]
    },
    {
      label: 'Estoque',
      icon: 'bi-boxes',
      children: [
        {label: 'Monitor de Estoque', icon: 'bi-graph-up', route: '/estoque/monitor'},
        {label: 'Ajuste de Estoque', icon: 'bi-sliders', route: '/estoque/ajuste'},
        {label: 'Baixas e Perdas', icon: 'bi-box-arrow-down', route: '/estoque/baixas-perdas'}
      ]
    },

    { label: 'Configurações', icon: 'bi-gear', route: '/configuracoes' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen());
    this.router.events.subscribe(() => this.expandMenuByRoute());
  }

  @Output()
  sidebarToggle = new EventEmitter<boolean>();

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarToggle.emit(this.sidebarOpen);
  }

  toggleSubmenu(item: MenuItem) {
    if (!this.sidebarOpen) return;

    this.menuItems.forEach(menu => {
      if (menu !== item && menu.children) {
        menu.expanded = false;
      }
    });

    item.expanded = !item.expanded;
  }

  expandMenuByRoute() {
    const currentUrl = this.router.url;

    this.menuItems.forEach(menu => {
      if (!menu.children) return;
      menu.expanded = menu.children.some(child =>
        currentUrl.startsWith(child.route ?? '')
      );
    });
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.sidebarOpen = false;
    }
  }

  onNavigate() {
    if (this.isMobile) {
      this.sidebarOpen = false;
    }
  }
}
