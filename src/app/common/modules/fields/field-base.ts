import { Directive, Input } from "@angular/core";

@Directive()
export class FieldBase {

  @Input() label: string;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() trackBy = 'id';
  @Input() showBy = 'name';

  constructor() { }

}