import { EventEmitter, Injectable } from '@angular/core';

import { Contato } from 'app/modelos/contato';

@Injectable()
export class ContatosDataBaseService {

  meuContatos: Contato[] = [];
  enviarContato = new EventEmitter();

  constructor() { }

  setContato(novoContato: Contato): void {
    this.meuContatos.push(novoContato);
    this.enviarContato.emit(this.meuContatos);
  }

  getContato(id: number): Contato {
    let contato: Contato;
    contato = this.meuContatos[id];
    return contato;
  }
}
