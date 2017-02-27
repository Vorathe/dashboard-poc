import { Component, Input, trigger, transition, animate, keyframes, style } from '@angular/core';

@Component({
  selector: 'cmp-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  animations: [
    trigger('nav', [
      transition('void => *', [
        animate(200,
          keyframes([
            style({ opacity: '0', transform: 'translateY(-100%)' }),
            style({ opacity: '1', transform: 'translateY(0)' })
          ])
        )
      ]),
      transition('* => void', [
        animate(200,
          keyframes([
            style({ opacity: '1', transform: 'translateY(0)' }),
            style({ opacity: '0', transform: 'translateY(-100%)' })
          ])
        )
      ])
    ])
  ]
})
export class HeaderNavComponent {
  @Input() navVisible: boolean;
  constructor() {}
}
