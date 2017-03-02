import {
  Component, OnInit, Input, style, keyframes, animate, transition, trigger, Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'cmp-search-tray',
  templateUrl: 'search-tray.component.html',
  styleUrls: ['search-tray.component.scss'],
  animations: [
    trigger('tray', [
      transition('void => *', [
        animate(200,
          keyframes([
            style({ opacity: '0', height: '0' }),
            style({ opacity: '1', height: '*' })
          ])
        )
      ]),
      transition('* => void', [
        animate(200,
          keyframes([
            style({ opacity: '1', height: '*' }),
            style({ opacity: '0', height: '0' })
          ])
        )
      ])
    ]),
    trigger('overlay', [
      transition('void => *', [
        animate(200,
          keyframes([
            style({ opacity: '0' }),
            style({ opacity: '1' })
          ])
        )
      ]),
      transition('* => void', [
        animate(200,
          keyframes([
            style({ opacity: '1' }),
            style({ opacity: '0' })
          ])
        )
      ])
    ])
  ]
})
export class SearchTrayComponent implements OnInit {
  @Input() trayVisible: boolean;
  @Input() searchContent: string;
  @Output() visibilityUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  closeTray() {
    this.trayVisible = false;
    this.visibilityUpdated.emit(this.trayVisible);
  }

}
