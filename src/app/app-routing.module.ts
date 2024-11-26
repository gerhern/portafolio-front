import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import {ProyectsComponent} from './pages/proyects/proyects.component';
import {ProyectPageComponent} from './pages/proyect-page/proyect-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProyectsComponent },
  { path: 'proyectos/:id', component: ProyectPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
