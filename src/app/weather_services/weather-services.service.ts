import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class WeatherServices {
    // private url:string= "http://api.openweathermap.org/data/2.5/weather";
    private url: string = "http://api.openweathermap.org/data/2.5/box/city";
    constructor(private _http: HttpClient) { }
    getStateWeather() {
        // const params = new HttpParams().set('zip','45324').set('appid','dee1f31027f8331288a5bbe93c7ccf3f');
        const params = new HttpParams().set('bbox', '-85,38,-80,41,10').set('appid', 'dee1f31027f8331288a5bbe93c7ccf3f');
        // let url = "http://mocker.ennate.academy/users";
        // let AppId = 'dee1f31027f8331288a5bbe93c7ccf3f';
        // let qString= {"zip":45324,"APPID":AppId,"units":"metric"}
        return this._http.get(this.url, { params });
    }
}