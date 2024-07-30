import { Component, OnInit, AfterViewInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Academy} from '../../interfaces/home/academy';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit, AfterViewInit {
  public academies: Academy[];
  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const promesa = async () => {
      return await this.homeService.getLandingData('academies');
    };
    promesa().then(response => {
      if(response.success){
        this.academies = response.data.academies;
      }else{
        this.academies = [];
      }
    }).catch(error => {
      this.academies = [];
      console.error('Error al realizar consulta');
    });
  }

}
