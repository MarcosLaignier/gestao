import {Component} from "@angular/core";
import {PessoaService} from "../../shared/service/pessoa.service";


@Component({
  selector: 'app-root',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent {

  constructor(private service:PessoaService) {
  }

  getPessoas(event: MouseEvent) {
    return this.service.getAll().subscribe(pessoa =>{
      console.log(pessoa);
    })
  }

}
