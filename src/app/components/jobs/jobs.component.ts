import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Job} from '../../interfaces/home/job';
import {HomeService} from '../../services/home.service';
import {SwitchMarkerAnalyses} from '@angular/compiler-cli/ngcc/src/analysis/switch_marker_analyzer';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, AfterViewInit {

  public jobs: Job[];

  constructor(
    private homeService: HomeService,
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
}
