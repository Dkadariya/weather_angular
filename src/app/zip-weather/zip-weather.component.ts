import { Component, OnInit } from '@angular/core';
import { WeatherServices } from '../weather_services/weather-services.service';

@Component({
  selector: 'app-zip-weather',
  templateUrl: './zip-weather.component.html',
  styleUrls: ['./zip-weather.component.css']
})
export class ZipWeatherComponent {
  weather: object = {
    "coord": {"lon": -122.08,"lat": 37.39},
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 296.71,
      "pressure": 1013,
      "humidity": 53,
      "temp_min": 294.82,
      "temp_max": 298.71
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
  };
  zip: any;
  constructor(private weaterServices: WeatherServices) {
    // weaterServices.getZipWeather('45324')
    // .subscribe(data => {this.weather = data; },
    //   error => {console.log(error); } );
  }

   getWeather() {
    this.weaterServices.getZipWeather(this.zip)
    .subscribe(data => {this.weather = data; },
      error => {console.log(error); } );
   }

}
