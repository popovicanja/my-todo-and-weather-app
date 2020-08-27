import {WeatherResult} from './weather.result';

export class Weather {
  city: string;
  countryCode: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  feelsLike: number;
  pressure: number;
  humidity: number;
  weatherIcon: string;
  weatherState: string;
  weatherDescription: string;
  windSpeed: number;

  constructor(weatherData: WeatherResult) {
    const { main: { temp, temp_min, temp_max, feels_like, pressure, humidity }, sys: { country } } = weatherData;
    const [ { icon, description, main } ] = weatherData.weather;
    this.city = weatherData.name;
    this.countryCode = country;
    this.temp = temp;
    this.tempMin = temp_min;
    this.tempMax = temp_max;
    this.feelsLike = feels_like;
    this.pressure = pressure;
    this.humidity = humidity;
    this.weatherIcon = icon;
    this.weatherState = main;
    this.weatherDescription = description;
    this.windSpeed = weatherData.wind.speed;
  }

  getIconUrl(): string {
    return this.weatherIcon ? `http://openweathermap.org/img/w/${this.weatherIcon}.png` : null;
  }
}
