import { Component } from '@angular/core';
import { PREGUNTAS } from './preguntas.db'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  console.log(PREGUNTAS);
  
}

