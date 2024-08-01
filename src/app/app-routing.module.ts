import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import {ProyectsComponent} from './pages/proyects/proyects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProyectsComponent },
  { path: 'proyecto/:id', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
