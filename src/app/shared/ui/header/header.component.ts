import { Component, OnInit, HostListener, trigger, state, style, transition, animate } from '@angular/core';
import { WindowRefService } from '../../services';

@Component({
  selector: 'cmp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('scrollState', [
      state('hide', style({
        transform: 'translateY(-100%)'
      })),
      state('show',   style({
        transform: 'translateY(0)'
      })),
      transition('hide => show', animate('100ms ease-in')),
      transition('show => hide', animate('100ms ease-out'))
    ])
  ]
})

export class HeaderComponent implements OnInit {
  _win: any;
  navOpen: boolean;
  headerState: string;
  currentScroll: number;


  constructor(private window: WindowRefService) {
    this._win = this.window.nativeWindow;
    this.currentScroll = this._win.pageYOffset;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let offsetY = this._win.pageYOffset;
    if (offsetY >= 134) {
      this.headerState = 'hide';
      // console.log('hide', offsetY);
    } else {
      this.headerState = 'show';
      // console.log('show', offsetY);
    }

    if (this.currentScroll > offsetY) {
      this.headerState = 'show';
    }

    this.currentScroll = offsetY;
  }

  openNav() {
    this.navOpen = !this.navOpen;
  }

  ngOnInit() {}
}
