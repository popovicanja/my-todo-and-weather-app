import {Injectable} from '@angular/core';
import {WeatherResult} from '../models/weather.result';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Weather} from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiKey = '7efa2d6f51801611e2430213f0e5d8b8';

  constructor(private http: HttpClient) {
  }

  getWeatherDate(city: string = 'Podgorica'): Promise<Weather> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.weatherApiKey}`;
    return this.http.get<WeatherResult>(url)
      .pipe(
        map(data => new Weather(data))
      )
      .toPromise();
  }

}
