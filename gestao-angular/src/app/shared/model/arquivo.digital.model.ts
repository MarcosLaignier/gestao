import {SafeUrl} from "@angular/platform-browser";

export class ArquivoDigital {
  id: number;
  nomeDoArquivo: string;
  tipo: string;
  tamanho: number;
  url: SafeUrl | null;
  blob: Blob | null;
}
