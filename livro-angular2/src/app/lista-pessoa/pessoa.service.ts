import { Injectable } from '@angular/core';

@Injectable()
export class PessoaService {

  nomesPessoas: string[] = ['João', 'Maria', 'Thiago'];

  constructor() { }

  getPessoas(): string[] {
    return this.nomesPessoas;
  }

  setPessoa(nome: string): void {
    this.nomesPessoas.push(nome);
  }

}
