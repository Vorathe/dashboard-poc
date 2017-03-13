import { Component, Input, EventEmitter, Output, style, keyframes, animate, transition, trigger } from '@angular/core';

@Component({
  selector: 'cmp-dashboard-controls',
  templateUrl: './dashboard-controls.component.html',
  styleUrls: ['./dashboard-controls.component.scss'],
  animations: [
    trigger('tray', [
      transition('void => *', [
        animate(100,
          keyframes([
            style({ opacity: '0', height: '0' }),
            style({ opacity: '1', height: '*' })
          ])
        )
      ]),
      transition('* => void', [
        animate(100,
          keyframes([
            style({ opacity: '1', height: '*' }),
            style({ opacity: '0', height: '0' })
          ])
        )
      ])
    ])
  ]
})

export class DashboardControlsComponent {
  @Input() view: string;
  @Output() viewUpdated = new EventEmitter();
  filtersOpen = false;
  dealers = [
    {
      name: 'Dealership 1',
      value: '1Deal'
    },
    {
      name: 'Dealership 2',
      value: '2Deal'
    },
    {
      name: 'Dealership 3',
      value: '3Deal'
    },
    {
      name: 'Dealership 4',
      value: '4Deal'
    },
    {
      name: 'Dealership 5',
      value: '5Deal'
    },
    {
      name: 'Dealership 6',
      value: '6Deal'
    },
    {
      name: 'Dealership 7',
      value: '7Deal'
    },
    {
      name: 'Dealership 8',
      value: '8Deal'
    },
    {
      name: 'Dealership 9',
      value: '9Deal'
    },
    {
      name: 'Dealership 10',
      value: '10Deal'
    }
  ];
  stages = [
    {
      name: 'All Stages',
      value: '1Stage'
    },
    {
      name: 'Sales',
      value: '2Stage'
    },
    {
      name: 'Finance',
      value: '4Stage'
    },
    {
      name: 'Contract',
      value: '5Stage'
    },
    {
      name: 'Funding',
      value: '6Stage'
    },
    {
      name: 'Admin',
      value: '7Stage'
    },
    {
      name: 'Follow up',
      value: '8Stage'
    }
  ];
  recents = [
    {
      name: 'All activity',
      value: '1Act'
    },
    {
      name: 'Updated within 24 hours',
      value: '2Act'
    },
    {
      name: 'Updated within 72 hours',
      value: '4Act'
    },
    {
      name: 'No activity for 72 hours',
      value: '5Act'
    }
  ];

  constructor() { }

  changeView(type) {
    this.view = type;
    this.viewUpdated.emit(this.view);
  }

  showFilters() {
    this.filtersOpen = !this.filtersOpen;
  }
}
