import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CheckService } from '../check.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  providers: [ CheckService ]
})
export class CheckComponent implements OnInit {
  public data;
  public status;

  constructor(private checkService: CheckService) { }

  submitForm(street: string, city: string, state: string, zip: number) {
    this.data = this.checkService.checkAddress(street, city, state, zip).subscribe(
    data => { this.data = data},
    err => console.error(err),
    () => console.log('api call completed')
    );
    debugger;
    // $('#check_form').hide();
  }

  checkValue() {
    console.log(this.data);
    debugger;
    // $('#check_form').hide();
  }

  ngOnInit() {
  }
}
