import { Component } from '@angular/core';
import { CreditAppStateService } from '../../services';
import { SlideUpAnimation } from '../animations/global';

@Component({
  selector: 'cmp-credit-app',
  templateUrl: './credit-app.component.html',
  styleUrls: ['./credit-app.component.scss'],
  animations: [ SlideUpAnimation ]
})
export class CreditAppComponent {
  creditAppOpen = false;

  constructor(private _creditAppState: CreditAppStateService) {
    this._creditAppState.changeEmitted$.subscribe(
      e => {
        this.creditAppOpen = e;
      }
    );
  }

  closeCreditApp() {
    this.creditAppOpen = false;
    this._creditAppState.emitChange(this.creditAppOpen);
  }
}
