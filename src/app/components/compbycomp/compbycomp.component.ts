import { Component, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { Operaciones } from '../../operaciones';

@Component({
  selector: 'app-compbycomp',
  templateUrl: './compbycomp.component.html',
  styleUrls: ['./compbycomp.component.css']
})
export class CompbycompComponent {

  @Input() valor1: string;
  @Input() valor2: string;
  aux1: number;
  aux2: number;

  opera: Operaciones = new Operaciones();

  @Output() envRes: EventEmitter<number> = new EventEmitter<number>();

  ngAfterContentChecked(): void {
    this.aux1 = parseFloat(this.valor1);
    this.aux2 = parseFloat(this.valor2);

  }
  suma() {
    this.envRes.emit(this.opera.sumar(this.aux1, this.aux2));
  }

  resta() {
    this.envRes.emit(this.opera.restar(this.aux1, this.aux2));
  }

  multi() {
    this.envRes.emit(this.opera.multiplicar(this.aux1, this.aux2));
  }

  divide() {
    this.envRes.emit(this.opera.dividir(this.aux1, this.aux2));
  }
}
