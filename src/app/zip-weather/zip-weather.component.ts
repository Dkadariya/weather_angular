import { Component, OnInit } from '@angular/core';
import { WeatherServices } from '../weather_services/weather-services.service';

@Component({
  selector: 'app-zip-weather',
  templateUrl: './zip-weather.component.html',
  styleUrls: ['./zip-weather.component.css']
})
export class ZipWeatherComponent {
  weather;
  constructor(private weaterServices: WeatherServices) {
    weaterServices.getZipWeather()
    .subscribe(data => {this.weather = data; });
   }

}
