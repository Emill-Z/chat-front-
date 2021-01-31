import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TextareaFieldComponent } from 'src/app/common/modules/fields/textarea-field/textarea-field.component';

@Component({
  selector: 'write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss']
})
export class WriteMessageComponent {

  @ViewChild(TextareaFieldComponent, { static: true })
  textareaField: TextareaFieldComponent;

  @Output()
  sendMessage: EventEmitter<string> = new EventEmitter<string>();

  public value: string = null;

  constructor() { }

  public onSend(): void {
    this.sendMessage.emit(this.value);
    this.textareaField.field.nativeElement.value = '';
  }

  public onChangeText(event: string): void {
    this.value = event;
  }

}
