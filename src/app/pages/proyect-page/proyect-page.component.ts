import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Technology} from '../../interfaces/home/technology';
import {Project} from '../../interfaces/home/project';
import {HomeService} from '../../services/home.service';
import {ActivatedRoute} from '@angular/router';
import {Images} from '../../interfaces/images';

@Component({
  selector: 'app-proyect-page',
  templateUrl: './proyect-page.component.html',
  styleUrls: ['./proyect-page.component.css']
})
export class ProyectPageComponent implements OnInit, AfterViewInit {

  public id: number;
  public title: string = '';
  public description: string = '';
  public fecha: any;
  public techs: Technology[];
  public project: Project;
  public images: Images;

  constructor(
    private homeService: HomeService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
  }

  ngAfterViewInit(): void {
    const promesa = async () => {
      return await this.homeService.getProjectData(this.id);
    };
    promesa().then(response => {
      if(response.success){
        this.images = response.data.images;
        this.techs = response.data.technologies;
        this.title = response.data.title;
        this.description = response.data.description;
        this.fecha = new Date(response.data.created_at).toLocaleString(undefined, {year: 'numeric', month: 'long'});
      }else{
        this.project = null;
      }
    }).catch((error) => {
      this.project = null;
      console.error('Error al realizar consulta');
    });
  }

}
