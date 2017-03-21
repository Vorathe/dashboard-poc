import { Component, style, keyframes, animate, transition, trigger } from '@angular/core';
import * as moment from 'moment';
let sillyname = require('sillyname');
let animationTime = 140;

@Component({
  selector: 'cmp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('slide', [
      transition('void => *', [
        animate(animationTime,
          keyframes([
            style({ opacity: '0', height: '0', padding: '0 0.625rem' }),
            style({ opacity: '1', height: '*', padding: '0.625rem 0.625rem' })
          ])
        )
      ]),
      transition('* => void', [
        animate(animationTime,
          keyframes([
            style({ opacity: '1', height: '*', padding: '0.625rem 0.625rem' }),
            style({ opacity: '0', height: '0', padding: '0 0.625rem' })
          ])
        )
      ])
    ]),
    trigger('listSlide', [
      transition('void => *', [
        animate(animationTime,
          keyframes([
            style({ opacity: '0', height: '0', padding: '0' }),
            style({ opacity: '1', height: '*', padding: '1.25rem 0 0 0' })
          ])
        )
      ]),
      transition('* => void', [
        animate(animationTime,
          keyframes([
            style({ opacity: '1', height: '*', padding: '1.25rem 0 0 0' }),
            style({ opacity: '0', height: '0', padding: '0' })
          ])
        )
      ])
    ]),
    trigger('pinWash', [
      transition('void => *', [
        animate(animationTime,
          keyframes([
            style({ opacity: '0', transform: 'scale(0)' }),
            style({ opacity: '1', transform: 'scale(21)' })
          ])
        )
      ]),
      transition('* => void', [
        animate(animationTime,
          keyframes([
            style({ opacity: '1', transform: 'scale(21)' }),
            style({ opacity: '0', transform: 'scale(0)' })
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
  steps = [
    {
      name: 'Purchase Agreement',
      percent: 10
    },
    {
      name: 'Credit Application',
      percent: 20
    },
    {
      name: 'Quote',
      percent: 30
    },
    {
      name: 'Contract',
      percent: 40
    },
    {
      name: 'Settlement',
      percent: 50
    },
    {
      name: 'Lead',
      percent: 60
    },
    {
      name: 'Lorem Ipsum',
      percent: 70
    }
  ];

  summaryData = {};
  activeSummaryIndex: number;
  summaryActive = false;
  leftArrow = false;
  midArrow = false;
  rightArrow = false;
  activeItemIndex: number;

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
    if (this.summaryActive && event !== this.view) {
      this.summaryActive = false;
      setTimeout(() => {
        this.view = event;
        this.summaryActive = true;
      }, animationTime + 25);
    } else {
      this.view = event;
    }
  }
}
