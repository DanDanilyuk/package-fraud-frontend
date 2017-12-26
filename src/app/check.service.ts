import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CheckService {
  private apiUrl = 'https://package-fraud-api.herokuapp.com/check';
  data;

  constructor(private http: HttpClient) { }

  checkAddress(street, city, state, zip) {
    const x = `?street=${street}&city=${city}&state=${state}&zip=${zip}`;
    return this.http.post(this.apiUrl + x);
  }

}
