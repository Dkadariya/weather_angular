import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class WeatherServices {
    private stateUrl = 'http://api.openweathermap.org/data/2.5/box/city';
    private zipUrl = 'http://api.openweathermap.org/data/2.5/weather';
    constructor(private _http: HttpClient) { }
    getStateWeather(bbox: string) {
        // const params = new HttpParams().set('zip','45324').set('appid','dee1f31027f8331288a5bbe93c7ccf3f');
        const params = new HttpParams().set('bbox', bbox).set('appid', 'dee1f31027f8331288a5bbe93c7ccf3f');
        return this._http.get(this.stateUrl, { params });
    }

    getZipWeather(zip: string) {
        const params = new HttpParams().set('zip', zip).set('appid', 'dee1f31027f8331288a5bbe93c7ccf3f');
        return this._http.get(this.zipUrl, { params });
    }
}