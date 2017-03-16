import { trigger, style, transition, animate, keyframes } from '@angular/core';
let animationTime = 140;

export const SlideAnimation = trigger('slide', [
  transition('void => *', [
    animate(animationTime,
      keyframes([
        style({ opacity: '0', height: '0' }),
        style({ opacity: '1', height: '*' })
      ])
    )
  ]),
  transition('* => void', [
    animate(animationTime,
      keyframes([
        style({ opacity: '1', height: '*' }),
        style({ opacity: '0', height: '0' })
      ])
    )
  ])
]);

export const SlideUpAnimation = trigger('slideUp', [
  transition('void => *', [
    animate(animationTime,
      keyframes([
        style({ opacity: '0', transform: 'translateY(100%)' }),
        style({ opacity: '1', transform: 'translateY(0)' })
      ])
    )
  ]),
  transition('* => void', [
    animate(animationTime,
      keyframes([
        style({ opacity: '1', transform: 'translateY(0)' }),
        style({ opacity: '0', transform: 'translateY(100%)' })
      ])
    )
  ])
]);
