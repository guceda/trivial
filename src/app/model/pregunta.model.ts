
export class Pregunta {
    texto:string
    res1:string
    res2:string
    res3:string
    res4:string
    resCorrecta:number
    constructor(texto, res1, res2, res3, res4, resCorrecta){
        this.texto = texto
        this.res1 = res1
        this.res2 = res2
        this.res3 = res3
        this.res4 = res4
        this.resCorrecta = resCorrecta
    }
}