import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionesComponent } from './componentes/secciones/secciones.component';
import { EnviadasComponent } from './componentes/enviadas/enviadas.component';


const routes: Routes = [

  { path: '', redirectTo: 'secciones', pathMatch: 'full' },
  { path: 'secciones', component: SeccionesComponent },
  { path: 'enviadas', component: EnviadasComponent },
  { path: '**', redirectTo: 'secciones', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
