import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appViewEle]',
})
export class ViewEleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.visible') isVisible: boolean = false;
  @HostListener('mouseover') onHover() {
    console.log('entered element');
    this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
  }
}
