import { Component, OnInit, Output } from '@angular/core';
import { PREGUNTAS } from '../preguntas.db';
import { Pregunta } from '../model/pregunta.model';
import { PreguntasService } from '../preguntas.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router'

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntaAct: Pregunta

  constructor(private preguntasService: PreguntasService, private router: Router) { }

  ngOnInit() {
    let promesa = this.preguntasService.getPreguntaActual(this.preguntaAct)
    promesa.then((arrPromesas) => {
      this.preguntaAct = arrPromesas
    })
    this.preguntasService.cuentaAtras()
  }
  handleClickRespuesta(pRes) {
    let res = { acierto: 'mal', puntos: 0 }
    if (pRes == this.preguntaAct.resCorrecta) {
      this.preguntasService.getMostrarEstado()
      this.preguntasService.getPuntosTotales()
      this.preguntasService.cuentaAtras()
      console.log('has acertado')
      alert('has acertado')
      res.acierto = 'bien'
      res.puntos = 10
    } else {
      console.log('has fallado');
      alert('has fallado')
      this.preguntasService.cuentaAtras()
    }
    let promesa = this.preguntasService.getPreguntaActual(res)
    promesa.then((arrPromesas) => {
      if (arrPromesas.texto != "fin")
        this.preguntaAct = arrPromesas
      else {
        this.router.navigate(['resultado'])
        console.log('se ha acabado');
      }
    })
    this.preguntasService.cuentaAtras()
  }
  handleClickTerminar() {
    this.router.navigate(['bienvenida'])
    this.preguntasService.reiniciar()
  }

}
