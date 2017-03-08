import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'cmp-dashboard-controls',
  templateUrl: './dashboard-controls.component.html',
  styleUrls: ['./dashboard-controls.component.scss']
})

export class DashboardControlsComponent {
  @Input() view: string;
  @Output() viewUpdated = new EventEmitter();

  constructor() { }

  changeView(type) {
    this.view = type;
    this.viewUpdated.emit(this.view);
  }
}
