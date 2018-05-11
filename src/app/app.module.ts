import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PreguntasService } from './preguntas.service';


@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent,
    ResultadoComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PreguntasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
