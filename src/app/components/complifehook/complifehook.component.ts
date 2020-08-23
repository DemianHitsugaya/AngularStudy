import { Component, OnInit, SimpleChanges, Input, OnChanges, ViewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-complifehook',
  templateUrl: './complifehook.component.html',
  styleUrls: ['./complifehook.component.css']
})
export class ComplifehookComponent implements OnInit {

  @Input() entradaHijo: string = '';
  contador: number = 0;

  constructor() { }

  ngOnInit() {
    this.mostrar('Pasa por ngOnInit');
  }

  ngOnChanges(cambios: SimpleChanges): void {

    for (let propiedad in cambios) {
      let cambio = cambios[propiedad];
      let actual = JSON.stringify(cambio.currentValue);
      let anterior = JSON.stringify(cambio.previousValue);
      this.mostrar('Pasa por ngOnChanges. (Propiedad' + propiedad + ' valor actual ' + actual + 'anterior ' + anterior + ')');
    }
  }

  ngDoCheck(): void {
    this.mostrar('Pasa por ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.mostrar('Pasa por ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.mostrar('Pasa por ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.mostrar('Pasa por ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.mostrar('Pasa por ngAfterViewChecked');
  }


  public mostrar(texto: string) {
    this.contador += 1;
    console.log(this.contador + ' - ' + texto);
  }
}
