import {Directive, HostListener, Input} from '@angular/core';
import {TipoPessoaEnum} from "../../enum/tipo.pessoa.enum";

@Directive({
  selector: '[documentMask]'
})
export class DocumentMaskDirective {

  @Input() tipoPessoa: TipoPessoaEnum = TipoPessoaEnum.FISICA;

  @HostListener('input', ['$event'])
  onInput(event: any) {
    let v = event.target.value.replace(/\D/g, '');

    if (this.tipoPessoa == TipoPessoaEnum.FISICA) {
      // CPF → 000.000.000-00
      if (v.length > 3) v = v.replace(/(\d{3})(\d)/, '$1.$2');
      if (v.length > 6) v = v.replace(/(\d{3})(\d)/, '$1.$2');
      if (v.length > 9) v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    } else {
      // CNPJ → 00.000.000/0000-00
      if (v.length > 2) v = v.replace(/(\d{2})(\d)/, '$1.$2');
      if (v.length > 5) v = v.replace(/(\d{3})(\d)/, '$1.$2');
      if (v.length > 8) v = v.replace(/(\d{3})(\d)/, '$1/$2');
      if (v.length > 12) v = v.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
    }

    event.target.value = v;
  }
}
