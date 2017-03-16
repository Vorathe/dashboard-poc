import { Component } from '@angular/core';
import { CreditAppStateService } from '../../services';
import { SlideAnimation } from '../animations/global';

@Component({
  selector: 'cmp-dashboard-view',
  templateUrl: 'dashboard-view.component.html',
  styleUrls: ['dashboard-view.component.scss'],
  animations: [ SlideAnimation ]
})

export class DashboardViewComponent {
  createOpen = false;
  constructor(private _creditAppState: CreditAppStateService) { }

  openCreate(event) {
    this.createOpen = !this.createOpen;
    event.preventDefault();
  }

  openCreditApp() {
    this._creditAppState.emitChange(true);
  }
}
