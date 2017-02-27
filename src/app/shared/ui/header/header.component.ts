import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  navOpen: boolean;

  constructor() { }

  openNav() {
    this.navOpen = !this.navOpen;
  }

  ngOnInit() { }
}
