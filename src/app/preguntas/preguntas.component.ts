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

  constructor(private preguntasService: PreguntasService, private router:Router) {}

  ngOnInit() {
    let promesa = this.preguntasService.getPreguntaActual()
    promesa.then((arrPromesas) => {
      this.preguntaAct = arrPromesas
    })
  }
  handleClickRespuesta(pRes) {
    if (pRes == this.preguntaAct.resCorrecta) {
      this.preguntasService.getPuntuacionActual()
      this.preguntasService.getMostrarResultado()
      console.log('has acertado')
      alert('has acertado')
    } else {
      console.log('has fallado');
      alert('has fallado')
    }
    let promesa = this.preguntasService.getPreguntaActual()
      promesa.then((arrPromesas) => {
        if(arrPromesas.texto != "fin")
        this.preguntaAct = arrPromesas
        else{
          this.router.navigate(['resultado'])
          console.log('se ha acabado');
          
        }
      })
  }
  handleClickTerminar(){
    this.router.navigate(['bienvenida']) 
  }

}
