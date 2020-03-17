import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocusElement]'
})
export class FocusElementDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }

}
