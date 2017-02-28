import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../services/window.service';

@Component({
  selector: 'cmp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  private _win;
  navOpen: boolean;

  constructor(private window: WindowRefService) {
    this._win = this.window.nativeWindow;
    console.log(this._win);
  }

  openNav() {
    this.navOpen = !this.navOpen;
  }

  ngOnInit() {}
}
