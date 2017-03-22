import { Directive, OnDestroy } from '@angular/core';

@Directive({
  selector: '[dirStickyScroller]'
})
export class StickyScrollerDirective implements OnDestroy {
  // Not needed on credit app, update when needed
  // @Input() fixedWhen: number;

  constructor() {
    // document.addEventListener('scroll', this.handleScrollEvent, true);
  }

  // handleScrollEvent(e) {
  //   console.log(e.srcElement.scrollTop);
  // }

  ngOnDestroy() {
    // document.removeEventListener('scroll', this.handleScrollEvent, true);
  }
}
