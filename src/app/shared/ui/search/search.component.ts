import { Component, OnInit, animate, transition, style, keyframes, trigger } from '@angular/core';

@Component({
  selector: 'cmp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('expander', [
      transition('void => *', [
        animate(320,
          keyframes([
            style({ transform: 'scale(0, 0)' }),
            style({ transform: 'scale(0.2, 0)' }),
            style({ transform: 'scale(0.4, 0)' }),
            style({ transform: 'scale(0.6, 0)' }),
            style({ transform: 'scale(0.8, 0.2)' }),
            style({ transform: 'scale(1, 0.4)' }),
            style({ transform: 'scale(1, 0.8)' }),
            style({ transform: 'scale(1, 1)' })
          ])
        )
      ]),
      transition('* => void', [
        animate(200,
          keyframes([
            style({ transform: 'scale(1, 1)' }),
            style({ transform: 'scale(1, 0.8)' }),
            style({ transform: 'scale(1, 0.4)' }),
            style({ transform: 'scale(0.8, 0.2)' }),
            style({ transform: 'scale(0.6, 0)' }),
            style({ transform: 'scale(0.4, 0)' }),
            style({ transform: 'scale(0.2, 0)' }),
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
