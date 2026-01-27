import {Component, OnInit} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TextBoxComponent} from "../../../../shared/components-commons/infra/text-box-component/text.box.component";
import {
  AutocompleteComponent
} from "../../../../shared/components-commons/infra/autocomplete-component/autocomplete.component";
import {PessoaService} from "../../../../shared/service/pessoa.service";
import {Pessoa} from "../../../../shared/model/pessoa";

@Component({
  selector: 'reserva-filter-component',
  templateUrl: './reserva.filter.component.html',
  standalone: true,
  imports: [
    RouterModule,
    TextBoxComponent,
    AutocompleteComponent
  ],
})
export class ReservaFilterComponent implements OnInit { // 1. Use o OnInit
  pessoaData: Pessoa[] = []; // Inicialize como array vazio
  pessoaSelecionada: Pessoa;

  constructor(private pessoaService: PessoaService) {
  }

  ngOnInit() {
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.pessoaService.getAll().subscribe({
      next: (response) => {
        if (response.body) {
          this.pessoaData = response.body;
        }
      },
      error: (err) => console.error('Erro ao carregar pessoas', err)
    });
  }

  // Método para capturar quando o usuário seleciona alguém
  onPessoaSelecionada(pessoa: Pessoa) {
    this.pessoaSelecionada = pessoa;
    console.log('Objeto completo recebido:', this.pessoaSelecionada);
  }
}
