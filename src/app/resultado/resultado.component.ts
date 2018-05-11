import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PREGUNTAS } from '../preguntas.db';
import { PreguntasService } from '../preguntas.service'


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  preguntas:any
  estado:any

  constructor(private router:Router, private preguntasService:PreguntasService) {}
  ngOnInit() {
    console.log(PREGUNTAS);  
    this.preguntas = PREGUNTAS
  }
  handleclickVolver(){
    this.router.navigate(['bienvenida'])   
  }
  
}
