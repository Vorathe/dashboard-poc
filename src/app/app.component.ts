import { Component, HostBinding } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CreditAppStateService } from './shared/services';
import '../style/app.scss';

const i18n = require('../config').i18n;

@Component({
  selector: 'cmp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class.open') creditAppOpen: boolean;
  showHeader = true;

  constructor(private _creditAppState: CreditAppStateService, translate: TranslateService, router: Router) {
    this._creditAppState.changeEmitted$.subscribe(
      e => {
        this.creditAppOpen = e;
      }
    );

    translate.addLangs(i18n.langs);
    translate.setDefaultLang(i18n.defaultLang);
    translate.use(translate.getBrowserLang());

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showHeader = event.url !== '/login';
      }
    });
  }
}
