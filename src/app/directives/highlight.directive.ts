import { Directive, ElementRef, Input } from '@angular/core';

@Directive({selector:'[highlight]'})
export class HighLightDirective {
    constructor(el:ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}