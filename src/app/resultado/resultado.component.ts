import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PREGUNTAS } from '../preguntas.db';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  preguntas

  constructor(private router:Router) { }
  ngOnInit() {
    console.log(PREGUNTAS);  
    this.preguntas = PREGUNTAS
  }
  handleclickVolver(){
    this.router.navigate(['bienvenida'])   
  }
  
}
