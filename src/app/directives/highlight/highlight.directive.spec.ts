import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  // Create a stub for ElementRef if needed
  const elementRefStub: ElementRef = { nativeElement: document.createElement('div') };

  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRefStub);
    expect(directive).toBeTruthy();
  });
});
