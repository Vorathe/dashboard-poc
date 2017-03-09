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

  constructor() { }

  changeView(type) {
    this.view = type;
    this.viewUpdated.emit(this.view);
  }

  showFilters() {
    this.filtersOpen = !this.filtersOpen;
  }
}
