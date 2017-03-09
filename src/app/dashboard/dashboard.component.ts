import { Component, style, keyframes, animate, transition, trigger } from '@angular/core';
import * as moment from 'moment';
let sillyname = require('sillyname');

@Component({
  selector: 'cmp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('slide', [
      transition('void => *', [
        animate(100,
          keyframes([
            style({ opacity: '0', height: '0', padding: '0 0.625rem' }),
            style({ opacity: '1', height: '15rem', padding: '0.625rem 0.625rem' })
          ])
        )
      ]),
      transition('* => void', [
        animate(100,
          keyframes([
            style({ opacity: '1', height: '15rem', padding: '0.625rem 0.625rem' }),
            style({ opacity: '0', height: '0', padding: '0 0.625rem' })
          ])
        )
      ])
    ]),
    trigger('listSlide', [
      transition('void => *', [
        animate(100,
          keyframes([
            style({ opacity: '0', height: '0', padding: '0' }),
            style({ opacity: '1', height: '15rem', padding: '20px 0 0 0' })
          ])
        )
      ]),
      transition('* => void', [
        animate(100,
          keyframes([
            style({ opacity: '1', height: '15rem', padding: '20px 0 0 0' }),
            style({ opacity: '0', height: '0', padding: '0' })
          ])
        )
      ])
    ])
  ]
})
export class DashboardComponent {

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
  activeSummaryIndex = 0;
  summaryActive = false;
  leftArrow = false;
  midArrow = false;
  rightArrow = false;
  activeItemIndex = 0;

  view = 'card';

  constructor() {}

  togglePin(card, event) {
    card.pinned = !card.pinned;
    event.stopPropagation();
  }

  getSummary(index) {
    this.activeSummaryIndex = 0;
    let indexArr = [];
    let l = this.data.length - 1;
    this.leftArrow = false;
    this.midArrow = false;
    this.rightArrow = false;
    this.activeItemIndex = index;

    for ( let i = 3; i < this.data.length + 1 ; i = i + 3 ) {
      if (index < i) {
        indexArr.push(i - 1);
      } else if (index === i && index === l) {
        indexArr.push(i);
      } else if (index === i + 1 && index === l) {
        indexArr.push(i + 1);
      } else if (index === l - 1 && index !== l) {
        indexArr.push(l);
      }
    }

    if (index % 3 === 0) {
      this.leftArrow = true;
    } else if (index % 3 === 1) {
      this.midArrow = true;
    } else {
      this.rightArrow = true;
    }

    this.activeSummaryIndex = indexArr[0];
    this.summaryActive = true;
    this.summaryData = {
      customerName: this.data[index].customerName,
      businessType: this.data[index].businessType,
      cardIndex: index
    };
  }

  handleViewChange(event) {
    this.view = event;
  }
}
