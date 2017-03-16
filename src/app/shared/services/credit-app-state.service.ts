import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CreditAppStateService {
  // Observable string sources
  private emitChangeSource = new Subject<boolean>();

  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands
  emitChange(change: boolean) {
    this.emitChangeSource.next(change);
  }
}
