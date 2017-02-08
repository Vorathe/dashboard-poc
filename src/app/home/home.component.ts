import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import * as moment from 'moment';
// import { DirectRenderer } from '@angular/core/src/render/api';
// Renderer,

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

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
    },
    {
      customerName: 'Peter Burke',
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: 'Peter Burke',
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: 'Peter Burke',
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
      customerName: 'Peter Burke',
      appStatus: 'Pending',
      dealId: 30508,
      businessType: 'Small Business',
      loanAmount: '$750,000',
      date: moment().format('llll'),
      step: 'Contract',
      pinned: false
    },
    {
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

  @ViewChildren('cardHost') private cardHosts: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    this.cardHosts.forEach((card: ElementRef) => {
      let entryValue = card.nativeElement.attributes.entryrow.value;
      // this.renderer.setElementStyle(card.nativeElement, 'background', 'yellow');
      if (entryValue === 'true') {
        console.log(entryValue);
        console.log(card.nativeElement);
        // this.renderer.createElement()
      }
    });
  }

  createElement(index) {
    if (index % 3 === 0) {
      console.log(index);
    }
  }

}
