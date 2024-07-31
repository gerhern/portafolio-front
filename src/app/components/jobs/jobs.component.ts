import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Job} from '../../interfaces/home/job';
import {HomeService} from '../../services/home.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, AfterViewInit {

  public jobs: Job[];

  constructor(
    private homeService: HomeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const promesa = async () => {
      return await this.homeService.getLandingData('jobs');
    };
    promesa().then(response => {
      if(response.success){
        this.jobs = response.data.jobs;
      }else{
        this.jobs = [];
      }
    }).catch((error) => {
      this.jobs = [];
      console.error('Error al realizar consulta');
    });
  }

  public showJobData(job: Job): void{
    let text: string = ``;
    const activities = job.activities.split(',');
    const currentDate = new Date();
    const startDate = new Date(job.start_date).toLocaleString(undefined, {year: 'numeric', month: 'long'}).toUpperCase();
    const endDate = new Date(job.end_date);
    if(endDate > currentDate){
      text += `<h2 class="swalDates">${startDate} - ACTUALIDAD</h2>`;
    }else{
      const endDateS = new Date(job.end_date).toLocaleString(undefined, {year: 'numeric', month: 'long'}).toUpperCase();
      text += `<h2 class="swalDates">${startDate} - ${endDateS}</h2>`;
    }
    text += `<h3 class="swalPosition">${job.position}</h3>`;
    let text2 = ``;
    text2 += `<ul class="swalList">`;
    activities.forEach(activity => {
      text2 += `<li class="swalActivity">${activity.trim()}</li>`;
    });
    text2 += '</ul>';


    Swal.fire({
      width: '50%',
      title: job.company,
      html: text,
      footer: text2,
      imageUrl: job.image,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: job.company,
      showConfirmButton: true,
      confirmButtonText: 'Ver proyectos',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      // buttonsStyling: false,
      customClass: {
        title: 'swalTitle',
        popup: 'swalContainer',
        image: 'swalImage',
        confirmButton: 'swalbutton',
        cancelButton: 'swalCancel',
      }
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['proyectos/' + job.id]);
      }
    });
  }
}
