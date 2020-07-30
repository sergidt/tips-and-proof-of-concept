import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hovering]',
  exportAs: 'hovering',
})
export class HoveringDirective {
  itemHovered = false;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    this.hoveringComponent(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoveringComponent(false);
  }

  protected hoveringComponent(value: boolean) {
    this.itemHovered = value;
    if (this.itemHovered) {
      this.renderer.addClass(this.el.nativeElement, 'hovered');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'hovered');
    }
  }
}
