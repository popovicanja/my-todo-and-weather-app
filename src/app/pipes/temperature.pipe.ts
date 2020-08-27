import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperature'})
export class TemperaturePipe implements PipeTransform{
  transform(temperature: number, type: 'C' | 'F' = 'C'): string {
    if (type === 'C') {
      return `${(temperature - 273.15).toFixed(1)} &#176;C`;
    } else {
      return `${(temperature + 273.15).toFixed(1)} &#8457`;
    }
  }
}
