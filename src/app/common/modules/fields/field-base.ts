import { Directive, ElementRef, Input, ViewChild } from "@angular/core";

@Directive()
export class FieldBase {

  @Input() type: string = 'text';
  @Input() label: string;

  // @ViewChild('input') input: ElementRef;

  constructor() { }

  // this.input.nativeElement.focus();


}