import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp6prop',
  templateUrl: './comp6prop.component.html',
  styleUrls: ['./comp6prop.component.css']
})
export class Comp6propComponent implements OnInit {

  title = 'app-works';
  ponFondo = true;
  mostrar = true;
  habilitar = false;
  referencia = 'https://www.google.com/';

  constructor() { }

  ngOnInit() {
  }

}
