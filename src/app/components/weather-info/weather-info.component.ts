import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../../models/weather.model';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  @Input() weather: Weather;
  @Input() country: string;

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
