import { Component, Input } from '@angular/core';
import { FieldBase } from '../field-base';

@Component({
  selector: 'select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent extends FieldBase {

  @Input() entities = [];

  constructor() {
    super();
  }

  public onSelect(id): void {

  }

}
