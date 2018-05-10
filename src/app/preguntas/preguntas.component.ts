import { Component, OnInit } from '@angular/core';
import { PREGUNTAS } from '../preguntas.db';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(PREGUNTAS)
  }

}
