import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string = environment.app_name;
  public imgUrl: string = 'assets/img/logos/menu-logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
