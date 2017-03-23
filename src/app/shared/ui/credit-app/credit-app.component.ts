import { Component, ViewChild } from '@angular/core';
import { CreditAppStateService } from '../../services';
import { SlideUpAnimation, FadeInOutAnimation, SlideAnimation } from '../animations/global';

@Component({
  selector: 'cmp-credit-app',
  templateUrl: './credit-app.component.html',
  styleUrls: ['./credit-app.component.scss'],
  animations: [ SlideUpAnimation, FadeInOutAnimation, SlideAnimation ]
})
export class CreditAppComponent {
  @ViewChild('tpl') view;
  creditAppOpen = false;
  slideUpApp = false;
  sections = [
    {
      name: 'Setup',
      active: true,
      enabled: true,
      open: true
    },
    {
      name: 'Deal Team',
      active: false,
      enabled: true,
      open: true
    },
    {
      name: 'Applicant',
      active: false,
      enabled: false,
      open: false
    },
    {
      name: 'References',
      active: false,
      enabled: false,
      open: false
    },
    {
      name: 'Guarantors',
      active: false,
      enabled: false,
      open: false
    },
    {
      name: 'Vehicles & Equip',
      active: false,
      enabled: false,
      open: false
    },
    {
      name: 'Finance Structure',
      active: false,
      enabled: false,
      open: false
    }
  ];
  animationTime: number;

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

  fadeCallback(e) {
    if (e.fromState === 'void') {
      this.slideUpApp = true;
    } else {
      this.slideUpApp = false;
    }
  }

  slideCallback(e) {
    this.animationTime = e.totalTime;
    if (e.toState === 'void') {
      console.log(e);
      this.creditAppOpen = false;
      this._creditAppState.emitChange(this.creditAppOpen);
    }
  }

  // TODO: Probably a more elegant way to get animation timing, perhaps requestAnimationFrame.
  navigateToSection(e) {
    let elem = document.getElementById(e);
    setTimeout(() => {
      this.view.nativeElement.scrollTop = elem.offsetTop;
    }, this.animationTime || 140);
  }

  openAccordion(i) {
    if (this.sections[i].enabled) {
      this.sections[i].open = !this.sections[i].open;
    } else {
      console.log('Section disabled');
    }

  }
}
