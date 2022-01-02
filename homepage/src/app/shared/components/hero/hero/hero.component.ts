import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Typewritter } from './hero';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    new Typewritter({
      text: "Alejandro Chacón, web 3.0 UI developer", // palabras usadas para el typewritter
      time: 90 // velocidad de escritura
    });
  }

}
