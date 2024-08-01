import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {Technology} from '../../interfaces/home/technology';
import {Project} from '../../interfaces/home/project';

@Component({
  selector: 'app-small-project',
  templateUrl: './small-project.component.html',
  styleUrls: ['./small-project.component.css']
})
export class SmallProjectComponent implements OnInit, AfterViewInit {
  @Input() project: Project;
  public techs: Technology[];

  constructor() {
  }

  ngOnInit(): void {
    this.techs = [].concat(this.project.technologies);
    // console.table(this.techs);
    if(this.techs.length > 3){
      while(this.techs.length >= 4){
        this.techs.pop();
      }
      this.techs.push({id: 0, url_image: 'plus-img.png', name: 'photo' });
    }
    // console.table(this.techs);
  }

  ngAfterViewInit(): void {
  }


}
