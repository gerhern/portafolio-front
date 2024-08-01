import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { AcademyComponent } from './components/academy/academy.component';
import {LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { JobsComponent } from './components/jobs/jobs.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SmallProjectComponent } from './components/small-project/small-project.component';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    SkillsComponent,
    AcademyComponent,
    JobsComponent,
    ProyectsComponent,
    ProjectsComponent,
    SmallProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
