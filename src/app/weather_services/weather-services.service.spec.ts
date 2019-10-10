import { TestBed } from '@angular/core/testing';

import { WeatherServices } from './weather-services.service';

describe('WeatherServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherServices = TestBed.get(WeatherServices);
    expect(service).toBeTruthy();
  });
});
