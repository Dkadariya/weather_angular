import { Component } from '@angular/core';
import { WeatherServices } from './weather_services/weather-services.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title;
  weather;
  constructor(weatherServices: WeatherServices) {
    weatherServices.getWeather()
    .subscribe(data => {this.weather = data['list']; });
  }
  trig() {
    console.log(this.title);
  }


  // user_details=[{
  //   "id": "641fb2f0-fb43-4498-aacf-1798d9a018ee",
  //   "firstName": "Leanne",
  //   "lastName": "Gaylord",
  //   "email": "Thaddeus82@yahoo.com",
  //   "address": {
  //     "street": "2681 Goodwin Isle",
  //     "city": "West Grahamberg",
  //     "zip": "80790",
  //     "state": "TN",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-04T06:16:35.807Z",
  //   "company": {
  //     "name": "Mitchell - Lubowitz",
  //     "website": "https://zane.biz"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/food"
  // },
  // {
  //   "id": "c608c110-27f1-4e2a-a104-8f76c2cb8174",
  //   "firstName": "Jay",
  //   "lastName": "Dickinson",
  //   "email": "Elijah.Morissette@hotmail.com",
  //   "address": {
  //     "street": "10141 Jarret Park",
  //     "city": "Lewisberg",
  //     "zip": "41258",
  //     "state": "NJ",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-04T08:03:40.488Z",
  //   "company": {
  //     "name": "Steuber, O'Conner and Johns",
  //     "website": "https://jonathan.net"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/abstract"
  // },
  // {
  //   "id": "4a2b1f70-7f25-4c0b-858c-e355221147bb",
  //   "firstName": "Kattie",
  //   "lastName": "Rodriguez",
  //   "email": "Raquel_Runolfsson6@hotmail.com",
  //   "address": {
  //     "street": "42695 Bashirian Street",
  //     "city": "North Aryanna",
  //     "zip": "47417",
  //     "state": "TN",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-04T05:48:11.853Z",
  //   "company": {
  //     "name": "Marks Inc",
  //     "website": "http://odie.info"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/transport"
  // },
  // {
  //   "id": "0d33f7aa-1e59-4adb-b6b4-e3f97be828e2",
  //   "firstName": "Jazlyn",
  //   "lastName": "Zulauf",
  //   "email": "Brycen53@yahoo.com",
  //   "address": {
  //     "street": "564 Kira Cove",
  //     "city": "Watsonburgh",
  //     "zip": "40411",
  //     "state": "NJ",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-04T01:10:50.160Z",
  //   "company": {
  //     "name": "Lind - Quitzon",
  //     "website": "http://mariano.biz"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/abstract"
  // },
  // {
  //   "id": "76586c62-2631-43b2-88c9-4c93b60d5316",
  //   "firstName": "Ezequiel",
  //   "lastName": "Sawayn",
  //   "email": "Fleta_Kilback@yahoo.com",
  //   "address": {
  //     "street": "1007 Wehner Fields",
  //     "city": "North Ashtyn",
  //     "zip": "84999",
  //     "state": "NH",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-04T05:01:38.026Z",
  //   "company": {
  //     "name": "Lindgren LLC",
  //     "website": "https://arthur.info"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/nature"
  // },
  // {
  //   "id": "f84c3a40-71ae-420a-bed8-258251775ebd",
  //   "firstName": "Dariana",
  //   "lastName": "Hand",
  //   "email": "Maya_Koelpin@hotmail.com",
  //   "address": {
  //     "street": "62503 Sawayn Rapid",
  //     "city": "East Myrtle",
  //     "zip": "04305-2554",
  //     "state": "WI",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-04T01:38:02.961Z",
  //   "company": {
  //     "name": "Feest LLC",
  //     "website": "http://sharon.name"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/animals"
  // },
  // {
  //   "id": "9a450aeb-107c-472e-9225-940bb349ff1c",
  //   "firstName": "Sonia",
  //   "lastName": "Jakubowski",
  //   "email": "Jannie6@gmail.com",
  //   "address": {
  //     "street": "26972 Dessie Walk",
  //     "city": "Brookechester",
  //     "zip": "06755-4651",
  //     "state": "MI",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-03T12:28:06.768Z",
  //   "company": {
  //     "name": "Johns and Sons",
  //     "website": "http://judd.net"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/cats"
  // },
  // {
  //   "id": "4d9e2cb3-f771-474e-a4a4-e2e9dcc97a89",
  //   "firstName": "Dereck",
  //   "lastName": "Goldner",
  //   "email": "Neva_Schimmel@yahoo.com",
  //   "address": {
  //     "street": "578 Rudy Street",
  //     "city": "West Robynmouth",
  //     "zip": "99754-4316",
  //     "state": "CA",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-04T09:55:54.283Z",
  //   "company": {
  //     "name": "Hintz, Lebsack and Trantow",
  //     "website": "https://frank.biz"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/abstract"
  // },
  // {
  //   "id": "3684e90e-a8cc-4e16-83ad-a2f364a64514",
  //   "firstName": "Bradford",
  //   "lastName": "Cronin",
  //   "email": "Demetris59@gmail.com",
  //   "address": {
  //     "street": "5467 Schoen Rapids",
  //     "city": "Hollytown",
  //     "zip": "25651-6160",
  //     "state": "RI",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-03T16:54:16.552Z",
  //   "company": {
  //     "name": "Mayer - Boyle",
  //     "website": "http://lorenzo.net"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/food"
  // },
  // {
  //   "id": "a0ff0568-73a4-4b9d-8681-d35bc44c076f",
  //   "firstName": "Tressa",
  //   "lastName": "McClure",
  //   "email": "Johnathon.Schoen@gmail.com",
  //   "address": {
  //     "street": "5691 Abagail Keys",
  //     "city": "Keelingfort",
  //     "zip": "66828",
  //     "state": "RI",
  //     "country": "USA"
  //   },
  //   "dateCreated": "2019-10-03T17:18:15.478Z",
  //   "company": {
  //     "name": "Pacocha - Nader",
  //     "website": "http://bradley.com"
  //   },
  //   "profilePic": "http://lorempixel.com/640/480/transport"
  // }];
}
