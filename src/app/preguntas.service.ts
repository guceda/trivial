import { Injectable } from '@angular/core';
import { Pregunta } from './model/pregunta.model';
import { PREGUNTAS } from './preguntas.db';

@Injectable()
export class PreguntasService {
    pregActual:number
    constructor(){
        this.pregActual = -1
    }
    getPreguntaActual():Promise<Pregunta>{
        let prom:Promise<Pregunta> = new Promise((resolve,reject)=>{
            this.pregActual++
           resolve (PREGUNTAS[this.pregActual])
           console.log(PREGUNTAS[this.pregActual]);
        }) 
        return prom  
    }
   
}
