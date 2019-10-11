import { Component, OnInit } from '@angular/core';
import { WeatherServices } from '../weather_services/weather-services.service';
@Component({
  selector: 'app-state-weather',
  templateUrl: './state-weather.component.html',
  styleUrls: ['./state-weather.component.css']
})
export class StateWeatherComponent {
  qState;
  weather;
  states = ['Illinois','Wisconsin','Florida','Tennessee','Ohio','Kentucky','Indiana', 'Massachusetts', 'Delaware', 'Rhode Island']
  constructor(private weatherServices: WeatherServices) {
    weatherServices.getStateWeather('Ohio')
    .subscribe(data => {this.weather = data['list']; },
    error => {console.log(error); });
  }

  getWeather() {
    this.weatherServices.getStateWeather(this.qState)
    .subscribe(data => {this.weather = data['list']; },
    error => {console.log(error); });
  }
  trig() {
    console.log(this.bbox);
  }
}
