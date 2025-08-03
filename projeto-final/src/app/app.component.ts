import { Component } from '@angular/core';

import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { Contato } from './modelos/contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de Contatos com Angular 2';

  contatoclicado: Contato;

  constructor(private dataBaseService: ContatosDataBaseService) { }

  enviarDetalhe(id): void {
    this.contatoclicado = this.dataBaseService.getContato(id);
  }
}
