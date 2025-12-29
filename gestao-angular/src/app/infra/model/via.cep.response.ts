import {Cidade} from "../../shared/model/cidade";

export class ViaCepResponse {
   cep: string;

   logradouro: string;

   complemento: string;

   bairro: string;

   localidade: string;

   uf: string;

   estado: string;

   regiao: string;

   cidade: Cidade;

   ibge: string;

   ddd: string;

   erro: boolean;
}
