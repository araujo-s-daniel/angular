import { Component, OnInit } from '@angular/core';

import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoaService]
})
export class ListaPessoaComponent implements OnInit {

  nome = 'Thiago';
  pessoas: string[];

  constructor(private service: PessoaService) {
    this.pessoas = service.getPessoas();
  }

  ngOnInit() {
  }

  listar() {

  }

  enviarNome(): void {
    this.service.setPessoa(this.nome);
  }

}
