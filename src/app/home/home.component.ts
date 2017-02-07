import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data = [
    {
      customerName: 'Ford Prefect',
      appStatus: 'Approved',
      dealId: 30506,
      businessType: 'Business (Fleet)',
      loanAmount: '$2,000,000',
      date: moment().format('llll'),
      step: 'Credit Application',
      pinned: false
    },
    {
      customerName: 'Ford Prefect',
      appStatus: 'Invalidated',
      dealId: 30507,
      businessType: 'Individual',
      loanAmount: '$200,000',
      date: moment().format('llll'),
      step: 'Lead',
      pinned: true
    }
    ,{
      customerName: 'Peter Burke',
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    }
  ];

  view = 'card';

  constructor() {}

}
