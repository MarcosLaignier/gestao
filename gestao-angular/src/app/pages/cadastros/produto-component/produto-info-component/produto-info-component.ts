import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";
import {Produto} from "../../../../shared/model/produto";

@Component({
  selector: 'produto-info-component',
  templateUrl: './produto-info-component.html',
  styleUrl: './produto-info-component.scss',
  standalone: true,
  imports: [
    RouterModule,
  ],

})
export class ProdutoInfoComponent {

  @Input() produto: Produto = new Produto();

}
