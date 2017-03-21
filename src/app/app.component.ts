import { Component, HostBinding } from '@angular/core';
import { CreditAppStateService } from './shared/services';
import '../style/app.scss';

@Component({
  selector: 'cmp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class.open') creditAppOpen: boolean;

  constructor(private _creditAppState: CreditAppStateService) {
    this._creditAppState.changeEmitted$.subscribe(
      e => {
        this.creditAppOpen = e;
      }
    );
  }


}
