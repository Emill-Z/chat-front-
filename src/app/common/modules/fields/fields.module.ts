import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { AutocompleteFieldComponent } from './autocomplete-field/autocomplete-field.component';
import { TextareaFieldComponent } from './textarea-field/textarea-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    InputFieldComponent,
    AutocompleteFieldComponent,
    TextareaFieldComponent,
  ],
  providers: [],
  entryComponents: [],
  exports: [
    InputFieldComponent,
    AutocompleteFieldComponent,
    TextareaFieldComponent,
  ]
})
export class IrisFieldsModule { }
