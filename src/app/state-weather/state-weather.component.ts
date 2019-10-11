import { Component, OnInit } from '@angular/core';
import { WeatherServices } from '../weather_services/weather-services.service';
@Component({
  selector: 'app-state-weather',
  templateUrl: './state-weather.component.html',
  styleUrls: ['./state-weather.component.css']
})
export class StateWeatherComponent {
  bbox;
  weather;
  constructor(private weatherServices: WeatherServices) {
    weatherServices.getStateWeather('-85,38,-80,41,10')
    .subscribe(data => {this.weather = data['list']; },
    error => {console.log(error); });
  }

  getWeather() {
    this.weatherServices.getStateWeather(this.bbox)
    .subscribe(data => {this.weather = data['list']; },
    error => {console.log(error); });
  }
  trig() {
    console.log(this.bbox);
  }
}
