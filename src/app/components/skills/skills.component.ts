import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Skill} from '../../interfaces/home/skill';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  public skills: Skill[];

  constructor(
    private homeService: HomeService,
  ){  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const promesa = async () => {
      return await this.homeService.getLandingData('skills');
    };
    promesa().then(response => {
      if(response.success){
        this.skills = response.data.skills;
      }else{
        this.skills = [];
      }
    }).catch(error => {
      this.skills = [];
      console.error('Error al realizar consulta');
    });
  }

  private showSkillInfo(){

  }
}
