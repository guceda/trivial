import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PreguntasService } from '../preguntas.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(private router:Router, private preguntasService:PreguntasService) { }

  ngOnInit() {
  }
  handleClickJugar(){
    this.router.navigate(['preguntas'])  
  }
}



