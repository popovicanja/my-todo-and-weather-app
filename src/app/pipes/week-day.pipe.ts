import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'weekDay'})
export class WeekDayPipe implements PipeTransform{
  transform(date: Date): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[date.getDay()];

    return dayName;
  }
}
