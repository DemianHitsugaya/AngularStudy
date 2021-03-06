import { Component } from '@angular/core';
import { Operaciones } from './operaciones';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Test';
  // salidaPadre: string = '';
  // res1: number;
  // res2: number;
  // res3: number;
  // res4: number;

  // valor1: '10';
  // valor2: '20';

  // resultado: number;

  // captchaResult(event) {
  //   this.resultado = event;
  // }

  // ngOnInit(): void {
  //   const operaciones = new Operaciones();
  //   this.res1 = operaciones.sumar(3, 5);
  //   this.res2 = operaciones.restar(9, 5);
  //   this.res3 = operaciones.multiplicar(8, 5);
  //   this.res4 = operaciones.dividir(12, 4);
  // }

  // fondoAmarillo = false;
  // letraGrande = false;
  // checkFondo(){
  //   this.fondoAmarillo = !this.fondoAmarillo;
  // }
  // checkLetra(){
  //   this.letraGrande = !this.letraGrande;
  // }

  // asignaClases(){
  //   let classes = {
  //     fa: this.fondoAmarillo,
  //     lg: this.letraGrande
  //   };

  //   return classes;
  // }

  mostrar: boolean = false;
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pares: boolean = true;
  impares: boolean = true;
  colorpar = 'blue';
  colorInpar = 'red';

  clActividad(valor) {
    let clases = {
      activo: valor, intactivo: !valor
    };
    return clases;
  }

}
