import { Component, Input } from '@angular/core';

import { Contato } from 'app/modelos/contato';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent {

  @Input() contato: Contato;

}
