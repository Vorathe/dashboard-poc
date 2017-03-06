import { Component, OnInit, style, keyframes, animate, transition, trigger } from '@angular/core';

@Component({
  selector: 'cmp-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [
    trigger('expander', [
      transition('void => *', [
        animate(180,
          keyframes([
            style({ transform: 'scale(0, 0)' }),
            style({ transform: 'scale(1, 0)' }),
            style({ transform: 'scale(1, 1)' }),
            style({ transform: 'scale(1.5, 1.25)' }),
            style({ transform: 'scale(1.5, 1.75)' }),
            style({ transform: 'scale(1.5, 2.64)' })
          ])
        )
      ]),
      transition('* => void', [
        animate(180,
          keyframes([
            style({ transform: 'scale(1.5, 2.64)' }),
            style({ transform: 'scale(1.5, 1.75)' }),
            style({ transform: 'scale(1.5, 1.25)' }),
            style({ transform: 'scale(1, 1)' }),
            style({ transform: 'scale(1, 0)' }),
            style({ transform: 'scale(0, 0)' })
          ])
        )
      ])
    ])
  ]
})
export class NotificationsComponent implements OnInit {
  notifyOpen: boolean;
  notifyVal: string;

  constructor() { }

  ngOnInit() { }

  openNotify() {
    this.notifyOpen = !this.notifyOpen;
  }

  handleChange(value) {
    this.notifyOpen = value;
  }

}
