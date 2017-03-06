import {
  Component, OnInit, Input, style, keyframes, animate, transition, trigger, Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'cmp-notify-tray',
  templateUrl: './notifications-tray.component.html',
  styleUrls: ['./notifications-tray.component.scss'],
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
    ])
  ]
})
export class NotifyTrayComponent implements OnInit {
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
