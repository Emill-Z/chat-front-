import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { SelectFieldComponent } from './select-field/select-field.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InputFieldComponent,
    SelectFieldComponent,
  ],
  entryComponents: [],
  exports: [
    InputFieldComponent,
    SelectFieldComponent,
  ]
})
export class IrisFieldsModule {
}
