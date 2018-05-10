import { Component, OnInit, Output } from '@angular/core';
import { PREGUNTAS } from '../preguntas.db';
import { Pregunta } from '../model/pregunta.model';
import { PreguntasService } from '../preguntas.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router'

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
  providers: [PreguntasService]
})
export class PreguntasComponent implements OnInit {

  preguntaAct:Pregunta
  puntuacion:number

  constructor(private preguntasService: PreguntasService, private router:Router) {
    this.puntuacion = 0
  }

  ngOnInit() {
    let promesa = this.preguntasService.getPreguntaActual()
    promesa.then((arrPromesas) => {
      this.preguntaAct = arrPromesas
    })
  }
  handleClickRespuesta(pRes) {
    if (pRes == this.preguntaAct.resCorrecta) {
      this.puntuacion +=50
      console.log('has acertado')
      alert('has acertado')
      let promesa = this.preguntasService.getPreguntaActual()
      promesa.then((arrPromesas) => {
        this.preguntaAct = arrPromesas
      })
    } else {
      console.log('has fallado');
      alert('has fallado')
      let promesa = this.preguntasService.getPreguntaActual()
      promesa.then((arrPromesas) => {
        this.preguntaAct = arrPromesas
      })

    }

  }
  handleClickTerminar(){
    this.router.navigate(['bienvenida']) 
  }

}
