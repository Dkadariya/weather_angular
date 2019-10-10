import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipWeatherComponent } from './zip-weather.component';

describe('ZipWeatherComponent', () => {
  let component: ZipWeatherComponent;
  let fixture: ComponentFixture<ZipWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
