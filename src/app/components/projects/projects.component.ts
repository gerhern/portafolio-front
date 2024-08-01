import { Component, AfterViewInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Project} from '../../interfaces/home/project';
import {HomeService} from '../../services/home.service';
import {Technology} from '../../interfaces/home/technology';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  public username: string = environment.user_name;
  public projects: Project[];
  public techs: Technology[];
  public description: string = 'Como desarrollador de software, he tenido la oportunidad de participar en una variedad de proyectos a lo largo de mi carrera.<br><br> Esta experiencia me ha permitido adquirir una sólida comprensión de las necesidades y desafíos las organizaciones en diferentes sectores.<br><br> Mi participación en estos proyectos ha abarcado desde la fase de análisis y diseño hasta la implementación y mantenimiento de soluciones tecnológicas, consolidando mi capacidad para contribuir de manera efectiva en entornos dinámicos.';
  public title: string = 'Experiencia profesional';
  public id: number = 0;

  constructor(
    private homeService: HomeService,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    const promesa = async () => {
      return await this.homeService.getLandingData('projects');
    };
    promesa().then(response => {
      if (response.success){
        this.projects = response.data.projects;
        // console.table(this.projects);
      }else{
        this.projects = [];
      }
    }).catch((error) => {
      this.projects = [];
      console.error('Error al realizar consulta');
    });
  }

  public selectProject(project: Project): void {
    this.title = project.title;
    this.description = project.short_description;
    this.techs = project.technologies;
    this.id = project.id;
  }

}
