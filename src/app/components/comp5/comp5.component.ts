import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styles: [` p { font-size: xx-large; background-color: yellow; }
             h2 { color: blue;} `]
})
export class Comp5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
