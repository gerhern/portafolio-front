import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public name: string = environment.user_name;
  public image: string = 'assets/img/logos/github-logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
