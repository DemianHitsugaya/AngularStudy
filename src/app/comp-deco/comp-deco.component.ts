import { Component, OnInit, Attribute, HostListener } from '@angular/core';

@Component({
  selector: 'app-comp-deco',
  templateUrl: './comp-deco.component.html',
  styleUrls: ['./comp-deco.component.css']
})
export class CompDecoComponent implements OnInit {

  contarclic: number =  0;
  contarOver: number =  0;

  constructor(@Attribute('miAtributo') atributo) {
    console.log(atributo);
  }

  @HostListener('click', ['$event'])
  onHostClick(event: Event) {
    console.log('====================================');
    console.log('click en app ' + event);
    console.log('====================================');
    this.contarclic += 1;

  }
  @HostListener('mouseover', ['$event'])
  onMousOver(event: Event) {
    console.log('mouseover' + event);
    this.contarOver += 1;
  }
  ngOnInit() {
  }

}
