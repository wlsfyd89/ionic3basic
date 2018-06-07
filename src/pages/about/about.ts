import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private baseWeatherURL : string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix : string = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';
  
  private searchInput: FormControl = new FormControl();
  private temperature: string;

  constructor(private http: Http) {}

    ngOnInit() {
        this.searchInput.valueChanges
            .debounceTime(1000)
            .switchMap(
                (data: string) => {
                    return this.http.get(this.baseWeatherURL + data + this.urlSuffix)
                }
            )
            .map(
                (data: Response) => data.json()     // return 생략
            )
            .map(
                (data: any) => data['main']
            )
            .subscribe(
                (data: Response) => {
                    console.log(data);
                    let temp: string = data['temp'];
                    console.log(temp);
                    let humidity: string = data['humidity']
                    this.temperature = `Temp: ${temp} / humidity: ${humidity}`;
                }
            )
    }
}
