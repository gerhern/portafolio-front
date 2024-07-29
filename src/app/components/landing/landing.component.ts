import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public name: string = 'Gerardo López Hernández';
  public image: string = 'assets/img/logos/github-logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
