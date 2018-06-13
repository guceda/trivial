import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PreguntasService } from '../preguntas.service';
import { PREGUNTAS } from '../preguntas.db';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  preguntas:any

  constructor(private router:Router, private preguntasService:PreguntasService) {
    this.preguntas = PREGUNTAS
   }

  ngOnInit() {
  }
  handleClickJugar(){
    this.router.navigate(['preguntas'])  
    this.preguntasService.reiniciar()
  }
}

