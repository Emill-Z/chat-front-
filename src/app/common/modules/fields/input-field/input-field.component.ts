import { Component } from '@angular/core';
import { FieldBase } from '../field-base';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent extends FieldBase {

  constructor() { 
    super();
  }

}
