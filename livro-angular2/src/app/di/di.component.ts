import { Component, OnInit } from '@angular/core';

import { NomesTecService } from './nomes-tec.service';
import { AlertaService } from 'app/alerta.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [NomesTecService]
})
export class DiComponent implements OnInit {

  tecnologias: string[] = [];

  constructor(private meuService: NomesTecService, private meuAlerta: AlertaService) {
    this.tecnologias = this.meuService.getNomesTec();
    this.meuAlerta.msgAlerta();
  }

  ngOnInit() {
  }

}
