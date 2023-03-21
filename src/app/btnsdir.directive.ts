import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[btn]',
})
export class BtnsdirDirective {
  @HostListener('mouseenter') hover() {
    let target = this.el.nativeElement.firstElementChild;
    target.style.backgroundColor = 'rgba(252, 118, 20, 1)';
  }
  @HostListener('mouseleave') leave() {
    let target = this.el.nativeElement.firstElementChild;
    target.style.backgroundColor = '#262E38';
  }
  constructor(private el: ElementRef) {}
}
