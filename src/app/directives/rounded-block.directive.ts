import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundedBlock]',
})
export class RoundedBlockDirective {
  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    this.establecerColorDeFondo();
    this.establecerBordeRedondeado();
  }

  establecerColorDeFondo() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

  establecerBordeRedondeado() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-radius',
      '50px'
    );
  }
}
