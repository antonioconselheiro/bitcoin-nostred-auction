import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {
  private readonly YEAR_DAYS = 365;
  private readonly HOURS_MINUTES = 60;
  private readonly DAY_HOURS = 24;
  private readonly MINUTES_SECONDS = 60;
  private readonly ONE_YEAR_MILI = 1000 * 60 * 60 * 24 * 365;
  private readonly ONE_DAY_MILI = 1000 * 60 * 60 * 24;
  private readonly ONE_HOUR_MILI = 1000 * 60 * 60;
  private readonly ONE_MINUTE_MILI = 1000 * 60;
  private readonly ONE_SECOND_MILI = 1000;

  transform(date: Date | string): Observable<string> {
    return timer(0, 1000).pipe(map(() => this.getTimeleft(date)));
  }

  private getTimeleft(date: Date | string): string {
    const currentDate = new Date();
    const dateToCompare = new Date(date);
    const dateTimeDiff = dateToCompare.getTime() - currentDate.getTime();

    const diffYears = Math.round((dateTimeDiff) / this.ONE_YEAR_MILI);
    const diffDays = Math.round((dateTimeDiff) / this.ONE_DAY_MILI) % this.YEAR_DAYS;
    const diffHours = Math.round((dateTimeDiff) / this.ONE_HOUR_MILI) % this.DAY_HOURS;
    const diffMinutes = Math.round((dateTimeDiff) / this.ONE_MINUTE_MILI) % this.HOURS_MINUTES;
    const diffSeconds = Math.round((dateTimeDiff) / this.ONE_SECOND_MILI) % this.MINUTES_SECONDS;

    const yearsDescription = this.getYearsDescription(diffYears);
    const daysDescription = this.getDaysDescription(diffDays);
    const hoursDescription = this.getHoursDescription(diffHours);
    const minutesDescription = this.getMinutesDescription(diffMinutes);
    const secondsDescription = this.getSecondsDescription(diffSeconds);

    const existingPeriods = [yearsDescription, daysDescription, hoursDescription, minutesDescription, secondsDescription].filter(item => !!item);

    return this.getDescription(existingPeriods);
  }

  private getYearsDescription(years: number): string {
    return years ? `${years} year${years > 1 ? 's' : ''}` : '';
  }

  private getDaysDescription(days: number): string {
    return days ? `${days} day${days > 1 ? 's' : ''}` : '';
  }

  private getHoursDescription(hours: number): string {
    return hours ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
  }

  private getMinutesDescription(minutes: number): string {
    return minutes ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '';
  }

  private getSecondsDescription(seconds: number): string {
    return seconds ? `${seconds} second${seconds > 1 ? 's' : ''}` : '';
  }

  private getDescription(existingPeriods: string[]): string {
    if (!existingPeriods.length) {
      return 'less than one second';
    }

    const lastPeriod = existingPeriods[existingPeriods.length - 1];

    return existingPeriods.length > 1 ?
      `${existingPeriods.slice(0, existingPeriods.length - 1).join(', ')} e ${lastPeriod}`
      : lastPeriod;
  }

}
