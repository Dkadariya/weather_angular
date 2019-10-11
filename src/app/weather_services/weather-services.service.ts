import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class WeatherServices {
    private stateUrl = 'http://api.openweathermap.org/data/2.5/box/city';
    private zipUrl = 'http://api.openweathermap.org/data/2.5/weather';
    private bBoxes = {'Illinois':'-91.513079,36.970298,-87.494756,42.508481,10',
    'Wisconsin':'-92.888114,42.491983,-86.805415,47.080621,10',
    'Florida':'-87.634938,24.523096,-80.031362,31.000888,10',
    'New York':'-79.762152,40.496103,-71.856214,45.01585,10',
    'Tennessee':'-90.310298,34.982972,-81.6469,36.678118,10',
    'Ohio':'-84.820159,38.403202,-80.518693,41.977523,10',
    'Kentucky':'-89.571509,36.497129,-81.964971,39.147458,10',
    'Indiana':'-88.09776,37.771742,-84.784579,41.760592,10', 
    'Massachusetts':'-73.508142,41.237964,-69.928393,42.886589,10', 
    'Delaware':'-75.788658,38.451013,-75.048939,39.839007,10', 
    'Rhode Island':'-71.862772,41.146339,-71.12057,42.018798,10'
};
    constructor(private _http: HttpClient) { }
    getStateWeather(state: string) {
        // const params = new HttpParams().set('zip','45324').set('appid','dee1f31027f8331288a5bbe93c7ccf3f');
        const params = new HttpParams().set('bbox', this.bBoxes[state]).set('appid', 'dee1f31027f8331288a5bbe93c7ccf3f');
        return this._http.get(this.stateUrl, { params });
    }

    getZipWeather(zip: string) {
        const params = new HttpParams().set('zip', zip).set('appid', 'dee1f31027f8331288a5bbe93c7ccf3f');
        return this._http.get(this.zipUrl, { params });
    }
}