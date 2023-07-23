import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appScroll]',
})
export class scrollDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('window:scroll') onScroll() {
    console.log('logging from cd');
    this.renderer.addClass(this.element.nativeElement, 'scroll');
    this.renderer.setStyle(this.element.nativeElement, 'width', '60%');
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'blue'
    );
  }
}
