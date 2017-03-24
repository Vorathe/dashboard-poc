import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'cmp-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Output() currentSection = new EventEmitter();
  @Input() sections: Array<any>;

  constructor() { }

  outputSection(index, section) {
    if (this.sections[index].enabled) {
      for ( let i = 0; i < this.sections.length; i++ ) {
        if (index !== i) {
          this.sections[i].active = false;
        }
      }
      this.sections[index].active = true;
      this.currentSection.emit(section);
    } else {
      console.log('Section disabled');
    }
  }
}
