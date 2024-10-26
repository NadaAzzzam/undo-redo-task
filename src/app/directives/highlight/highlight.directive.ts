// directives/highlight/highlight.directive.ts
import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('class.highlighted') highlighted = false;
  @Input() set trigger(value: boolean) {
    if (value) {
      this.highlight();
    }
  }
  constructor() {}

  @HostListener('focus')
  onFocus() {
    this.highlight();
  }

  @HostListener('click')
  onClick() {
    this.highlight();
  }

  highlight() {
    this.highlighted = true;
    setTimeout(() => {
      this.highlighted = false;
    }, 1000);
  }
}
