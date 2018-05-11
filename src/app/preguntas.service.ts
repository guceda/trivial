import { Injectable } from '@angular/core';
import { Pregunta } from './model/pregunta.model';
import { PREGUNTAS } from './preguntas.db';

@Injectable()
export class PreguntasService {
    pregActual:number
    resultado:number
    preguntaVacia:Pregunta
    aciertosTotales:Array<string>
    constructor(){
        this.pregActual = -1
        this.resultado = 0
        this.preguntaVacia = {texto:'fin', res1:'', res2:'', res3:'', res4:'', resCorrecta:0 }
        this.aciertosTotales = []

    }
    getPreguntaActual():Promise<Pregunta>{
        let prom:Promise<Pregunta> = new Promise((resolve,reject)=>{
            if(this.pregActual < PREGUNTAS.length - 1){
                this.pregActual++
                resolve (PREGUNTAS[this.pregActual])
                console.log(PREGUNTAS[this.pregActual]);
            }else{
                resolve (this.preguntaVacia)                          
            } 
        }) 
        return prom  
    }
    getPuntuacionActual():Promise<number>{
        let prom:Promise<number> = new Promise((resolve, reject)=>{
            this.resultado += 10
            this.aciertosTotales.push('acierto')
            resolve(this.resultado)
            console.log(this.resultado);           
        })
        return prom
    }
    getMostrarResultado(){
        return this.resultado
    }      
   
}
