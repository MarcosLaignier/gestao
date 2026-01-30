import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Input } from "@angular/core";
import { ProdutoFilterDTO } from "../../../../shared/dto/filterDTO/produto.filter.dto";

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

  @Input()
  filter: ProdutoFilterDTO = new ProdutoFilterDTO();

}
