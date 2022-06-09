import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { EnviadasComponent } from './componentes/enviadas/enviadas.component';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SeccionesComponent,
    ResultadosComponent,
    EnviadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirestore(() => getFirestore()), 
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
