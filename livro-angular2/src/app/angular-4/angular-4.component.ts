import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-4',
  templateUrl: './angular-4.component.html',
  styleUrls: ['./angular-4.component.css']
})
export class Angular4Component implements OnInit {

  troca: boolean = true;
  tecnologias: string[] = ['Angular 2', 'Angular 4', 'JavaScript', 'html', 'CSS'];

  constructor() { }

  ngOnInit() {
  }

  mudar() {
    this.troca = !this.troca;
  }

}
