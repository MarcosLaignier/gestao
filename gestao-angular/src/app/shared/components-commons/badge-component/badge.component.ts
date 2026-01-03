import {Component, Input} from "@angular/core";
import {FormFieldBase} from "../../utils/form.field.base";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ToolbarComponent} from "../toolbar-filter-component/toolbar.component";
import {PessoaFilterComponent} from "../../../pages/cadastros/pessoa-component/pessoa-filter/pessoa.filter.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'badge-component',
  standalone:true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {


  @Input() text: string = '';

  @Input() color: | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  /** Atributo para bordas arredondadas
   *
   */
  @Input() pill: boolean = false;

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get classes(): string[] {
    return [
      'badge',
      `bg-${this.color}`,
      this.pill ? 'rounded-pill' : '',
      this.sizeClass
    ];
  }

  private get sizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'badge-sm';
      case 'lg':
        return 'badge-lg';
      default:
        return '';
    }
  }

}
