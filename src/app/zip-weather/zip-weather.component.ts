import { Component, OnInit } from '@angular/core';
import { WeatherServices } from '../weather_services/weather-services.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-zip-weather',
  templateUrl: './zip-weather.component.html',
  styleUrls: ['./zip-weather.component.css']
})
export class ZipWeatherComponent {
  fDate = new DatePipe('en-US').transform(Date.now(), 'short');
  weather;
  zip: any;
  constructor(private weaterServices: WeatherServices) {
    weaterServices.getZipWeather('45324')
    .subscribe(data => {this.weather = data; },
      error => {console.log(error); } );
  }

   getWeather() {
    this.weaterServices.getZipWeather(this.zip)
    .subscribe(data => {this.weather = data; },
      error => {console.log(error); } );
   }


}
