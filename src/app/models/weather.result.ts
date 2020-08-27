export interface WeatherResult {
  weather: WeatherData[];
  main: MainWeatherData;
  name: string;
  sys: { country: string };
  wind: WindData;
}

interface WeatherData {
  id: number;
  main: 'Clouds';
  description: 'few clouds';
  icon: '02d';
}
interface MainWeatherData {
  temp: 303.15;
  feels_like: 303.96;
  temp_min: 303.15;
  temp_max: 303.15;
  pressure: 1013;
  humidity: 42;
}

interface WindData {
  deg: number;
  speed: number;
}
