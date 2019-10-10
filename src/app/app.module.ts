import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherServices } from './weather_services/weather-services.service';
import { StateWeatherComponent } from './state-weather/state-weather.component';
import { ZipWeatherComponent } from './zip-weather/zip-weather.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'state', component: StateWeatherComponent},
  {path: 'zip', component: ZipWeatherComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StateWeatherComponent,
    ZipWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
