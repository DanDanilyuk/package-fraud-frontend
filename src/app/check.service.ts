import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckService {
  private apiUrl = 'https://package-fraud-api.herokuapp.com/check';
  data: Observable[];

  constructor(private http: Http) { }

  postData(params) {
   return this.http.post(this.apiUrl + params);
   .map((res: Response) => res.json());
  }

  postAddress(params) {
    this.postData(params).subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

 checkAddress(street, city, state, zip) {
   let x = `?street=${street}&city=${city}&state=${state}&zip=${zip}`;
   debugger;
   this.postAddress(x);
 }

}
