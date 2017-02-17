import { Component, style, keyframes, animate, transition, trigger } from '@angular/core';
import * as moment from 'moment';
import * as sillyname from 'sillyname';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slide', [
      transition('void => *', [
        animate(200,
          keyframes([
            style({ opacity: '0', maxHeight: '0' }),
            style({ opacity: '1', maxHeight: '800px' })
          ])
        )
      ]),
      transition('* => void', [
        animate(200,
          keyframes([
            style({ opacity: '1', maxHeight: '800px' }),
            style({ opacity: '0', maxHeight: '0' })
          ])
        )
      ])
    ])
  ]
})
export class HomeComponent {

  data = [
    {
      customerName: sillyname(),
      appStatus: 'Approved',
      dealId: 30506,
      businessType: 'Business (Fleet)',
      loanAmount: '$2,000,000',
      date: moment().format('llll'),
      step: 'Credit Application',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Invalidated',
      dealId: 30507,
      businessType: 'Individual',
      loanAmount: '$200,000',
      date: moment().format('llll'),
      step: 'Lead',
      pinned: true
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Approved',
      dealId: 30506,
      businessType: 'Business (Fleet)',
      loanAmount: '$2,000,000',
      date: moment().format('llll'),
      step: 'Credit Application',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Invalidated',
      dealId: 30507,
      businessType: 'Individual',
      loanAmount: '$200,000',
      date: moment().format('llll'),
      step: 'Lead',
      pinned: true
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: sillyname(),
      appStatus: 'Pending',
      dealId: 30511,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    }
  ];

  summaryData = {};
  summaryRowIndexes = [];
  activeSummaryIndex = 0;
  summaryActive = false;
  leftArrow = false;
  midArrow = false;
  rightArrow = false;

  view = 'card';
  states = window['config'].states;
  env = window['config'].env;

  constructor() {
    console.log(window['config']);
  }

  getSummary(index) {
    this.activeSummaryIndex = 0;
    let indexArr = [];
    let l = this.data.length - 1;
    this.leftArrow = false;
    this.midArrow = false;
    this.rightArrow = false;
    this.summaryActive = true;
    // console.log('clicked index', index);
    console.log(index % 3);
    for ( let i = 3; i < this.data.length + 1 ; i = i + 3 ) {
      if (index < i) {
        indexArr.push(i - 1);
      } else if (index === i && index === l) {
        indexArr.push(i);
      } else if (index === i + 1 && index === l) {
        indexArr.push(i + 1);
      }
    }
    if (index % 3 === 0) {
      console.log('left');
      this.leftArrow = true;
    } else if (index % 3 === 1) {
      console.log('middle');
      this.midArrow = true;
    } else {
      console.log('right');
      this.rightArrow = true;
    }
    this.activeSummaryIndex = indexArr[0];
    // console.log('Active Summary Index -> ', this.activeSummaryIndex);
    this.summaryData = {
      customerName: this.data[index].customerName,
      businessType: this.data[index].businessType,
      cardIndex: index
    };
  }
}
