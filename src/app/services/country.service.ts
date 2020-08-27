import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryResult} from '../models/country.result';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}


  getCountryByCode(countryCode: string): Promise<string> {
    const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
    return this.http.get<CountryResult>(url)
      .pipe(
        map(el => el.name)
      ).toPromise();
  }

}
