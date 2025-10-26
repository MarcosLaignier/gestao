import {Component} from "@angular/core";
import {PessoaService} from "../../../shared/service/pessoa.service";
import {Pessoa} from "../../../shared/model/pessoa";


@Component({
  selector: 'app-root',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent {

  dataSource: Pessoa[];
  displayedColumns = ['nome', 'nascimento', 'documento', 'situacao']
  constructor(private service:PessoaService) {
  }

  getPessoas(event:any) {
    return this.service.getAll().subscribe(pessoas =>{
      this.dataSource = pessoas
    })
  }

}
