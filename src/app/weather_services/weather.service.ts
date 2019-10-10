import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class WeatherServices{
    // private url:string= "http://api.openweathermap.org/data/2.5/weather";
    private url:string="http://api.openweathermap.org/data/2.5/box/city";
Wdata = {
    "id": 2208791,
    "name":"Yafran",
    "coord":{
        "lon":12.52859,"lat":32.06329},"main":{"temp":9.68,"temp_min":9.681,"temp_max":9.681,"pressure":961.02,"sea_level":1036.82,"grnd_level":961.02,"humidity":85},"dt":1485784982,"wind":{"speed":3.96,"deg":356.5},"rain":{"3h":0.255},"clouds":{"all":88},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}]};

constructor(private _http: HttpClient) {}
getWeather() {
    // const params = new HttpParams().set('zip','45324').set('appid','dee1f31027f8331288a5bbe93c7ccf3f');
    const params = new HttpParams().set('bbox','-85,38,-80,41,10').set('appid','dee1f31027f8331288a5bbe93c7ccf3f');
    // let url = "http://mocker.ennate.academy/users";
    // let AppId = 'dee1f31027f8331288a5bbe93c7ccf3f';
    // let qString= {"zip":45324,"APPID":AppId,"units":"metric"}
    return this._http.get(this.url,{params});
}
}