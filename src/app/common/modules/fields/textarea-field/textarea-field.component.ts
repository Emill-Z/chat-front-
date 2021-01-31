import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FieldBase } from '../field-base';

@Component({
  selector: 'textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent extends FieldBase implements OnInit, OnDestroy {

  @ViewChild('field') field: ElementRef;

  @Output()
  changeText: EventEmitter<string> = new EventEmitter<string>();

  public control = new FormControl('');

  private unsubscribe$: Subject<void> = new Subject();

  constructor() {
    super();
  }

  ngOnInit() {
    this.control.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe((data: string) => {
        this.changeText.emit(data);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
