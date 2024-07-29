import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private endpoint = environment.portfolio_back;
  public httpOptions;

  constructor(
    private http: HttpClient,
    ){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
      };
  }

  public getLandingData(type: string): any {
    try{
      return this.http.post(this.endpoint + 'home', {type}, this.httpOptions).toPromise();
    }catch (e){
      console.error(e);
    }
  }
}
