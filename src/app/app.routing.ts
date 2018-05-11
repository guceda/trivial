//fichero donde definimos las rutas de la aplicacion
import { Routes } from '@angular/router'
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

export const appRoutes:Routes = [
    { path:'preguntas', component: PreguntasComponent},
    { path:'resultado', component: ResultadoComponent},
    { path:'**', component: BienvenidaComponent }

]