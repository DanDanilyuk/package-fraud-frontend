import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  providers: [ CheckService ]
})
export class CheckComponent implements OnInit {
  message: string;
  data;

  constructor(private checkService: CheckService) { }

  submitForm(street: string, city: string, state: string, zip: number) {
    this.checkService.checkAddress(street, city, state, zip);
  }

  ngOnInit() {
  }
}
