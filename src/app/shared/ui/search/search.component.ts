import { Component, OnInit, animate, transition, style, keyframes, trigger } from '@angular/core';

@Component({
  selector: 'cmp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('expander', [
      transition('void => *', [
        animate(180,
          keyframes([
            style({ transform: 'scale(0, 0)' }),
            style({ transform: 'scale(1, 0)' }),
            style({ transform: 'scale(1, 1)' }),
            style({ transform: 'scale(1.14, 1.25)' }),
            style({ transform: 'scale(1.14, 1.75)' }),
            style({ transform: 'scale(1.14, 2.25)' })
          ])
        )
      ]),
      transition('* => void', [
        animate(180,
          keyframes([
            style({ transform: 'scale(1.14, 2.25)' }),
            style({ transform: 'scale(1.14, 1.75)' }),
            style({ transform: 'scale(1.14, 1.25)' }),
            style({ transform: 'scale(1, 1)' }),
            style({ transform: 'scale(1, 0)' }),
            style({ transform: 'scale(0, 0)' })
          ])
        )
      ])
    ])
  ]
})
export class SearchComponent implements OnInit {
  searchOpen: boolean;
  searchVal: string;

  constructor() { }

  ngOnInit() { }

  openSearch() {
    this.searchOpen = !this.searchOpen;
  }

  handleChange(value) {
    this.searchOpen = value;
  }

}
