import { Component, Input } from '@angular/core';
import { PREGUNTAS } from './preguntas.db';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Input()clickPuntos
  constructor( private router:Router){}

  handleClickPuntos(){
    this.router.navigate(['resultado'])   
  }
}

