import {Pessoa} from "./pessoa";
import {Cidade} from "./cidade";
import {GridColumn} from "../utils/directives/grid.column.decorator";

export class Endereco {

  id: number;

  pessoa: Pessoa;

  // @GridColumn({ label: 'Cidade', type: 'texto', ordem: 5 })
  cidade: Cidade;

  @GridColumn({ label: 'Logradouro', type: 'texto', ordem: 1 })
  logradouro: string;

  @GridColumn({ label: 'Numero', type: 'texto',width:'100px', ordem: 2 })
  numero: string;

  @GridColumn({ label: 'Complemento', type: 'texto', ordem: 3 })
  complemento: string;

  @GridColumn({ label: 'Bairro', type: 'texto', ordem: 4 })
  bairro: string;

  @GridColumn({ label: 'CEP', type: 'texto', width:'150px' , ordem: 5 })
  cep: string;

  @GridColumn({ label: 'Ponto Ref.', type: 'texto', ordem: 6 })
  pontoReferencia: string;

  versao: number;
}0
