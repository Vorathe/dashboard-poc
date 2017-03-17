import { Component } from '@angular/core';
import { CreditAppStateService } from '../../services';
import { SlideUpAnimation, FadeInOutAnimation } from '../animations/global';

@Component({
  selector: 'cmp-credit-app',
  templateUrl: './credit-app.component.html',
  styleUrls: ['./credit-app.component.scss'],
  animations: [ SlideUpAnimation, FadeInOutAnimation ]
})
export class CreditAppComponent {
  creditAppOpen = false;
  slideUpApp = false;

  constructor(private _creditAppState: CreditAppStateService) {
    this._creditAppState.changeEmitted$.subscribe(
      e => {
        this.creditAppOpen = e;
      }
    );
  }

  closeCreditApp() {
    this.slideUpApp = false;
  }

  fadeCallback(event) {
    console.log(event);
    if (event.fromState === 'void') {
      this.slideUpApp = true;
    } else {
      this.slideUpApp = false;
    }
  }

  slideCallback(event) {
    console.log(event);
    if (event.toState === 'void') {
      this.creditAppOpen = false;
      this._creditAppState.emitChange(this.creditAppOpen);
    }
  }

}
