import { Injectable } from '@angular/core';
import { Pregunta } from './model/pregunta.model';
import { PREGUNTAS } from './preguntas.db';

@Injectable()
export class PreguntasService {
    pregActual: number
    preguntaVacia: Pregunta
    estado: any[]

    constructor() {
        this.pregActual = -1
        this.estado = []
        this.preguntaVacia = { texto: 'fin', res1: '', res2: '', res3: '', res4: '', resCorrecta: 0 }

    }
    getPreguntaActual(result): Promise<Pregunta> {
        if (this.pregActual !== -1) {
            this.estado.push(result)
            console.log(this.estado)
        }
        let prom: Promise<Pregunta> = new Promise((resolve, reject) => {
            if (this.pregActual < PREGUNTAS.length - 1) {
                this.pregActual++
                resolve(PREGUNTAS[this.pregActual])
                console.log(PREGUNTAS[this.pregActual]);
            } else {
                resolve(this.preguntaVacia)
            }
        })
        return prom
    }
    getMostrarEstado() {
        return this.estado
    }
    getPuntosTotales() {
        let puntosTotales = 0
        for (let i = 0; i < this.estado.length; i++) {
            puntosTotales += this.estado[i].puntos
        }
        console.log(puntosTotales);
        return puntosTotales
    }
    getEstadoTotal(){
        let estadoTotal:Array<string>
        for (let i = 0; i < this.estado.length; i++) {
            estadoTotal.push(this.estado[i].acierto)
        }
        console.log(estadoTotal);
        return estadoTotal
    }
    reiniciar(){
        this.pregActual = -1
        this.estado = []
        this.preguntaVacia = { texto: 'fin', res1: '', res2: '', res3: '', res4: '', resCorrecta: 0 }
    }
}
