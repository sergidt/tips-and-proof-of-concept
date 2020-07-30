import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent, merge, of } from 'rxjs';
import { switchMap, takeWhile, tap } from 'rxjs/operators';
import { inView } from './intersection-observer.utils';

@Directive({
  selector: '[hovering2]',
  exportAs: 'hovering2',
})
export class HoveringDirective2 implements AfterViewInit {
  constructor(protected el: ElementRef, protected renderer: Renderer2) {}

  ngAfterViewInit(): void {
    inView(this.el.nativeElement)
      .pipe(
        switchMap((isInView) =>
          !!isInView
            ? merge(
                mouseEnterHandler(this.el.nativeElement, this.renderer, isInView),
                mouseLeaveHandler(this.el.nativeElement, this.renderer, isInView)
              )
            : of(false)
        )
      )
      .subscribe((_) => console.log());
  }
}

function mouseEnterHandler(element: HTMLElement, renderer: Renderer2, elementInView: boolean) {
  return fromEvent(element, 'mouseenter').pipe(
    tap(() => renderer.addClass(element, 'hovered')),
    takeWhile(() => elementInView)
  );
}

function mouseLeaveHandler(element: HTMLElement, renderer: Renderer2, elementInView: boolean) {
  return fromEvent(element, 'mouseleave').pipe(
    tap(() => renderer.removeClass(element, 'hovered')),
    takeWhile(() => elementInView)
  );
}
