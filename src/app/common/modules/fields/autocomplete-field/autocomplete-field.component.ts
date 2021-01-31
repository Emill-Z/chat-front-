import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldBase } from '../field-base';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'autocomplete-field',
  templateUrl: './autocomplete-field.component.html',
  styleUrls: ['./autocomplete-field.component.scss']
})
export class AutocompleteFieldComponent extends FieldBase implements OnInit, OnDestroy {

  @ViewChild('field') field: ElementRef;

  @Input()
  set entities(data: unknown[]) {
    if (!data) { return; }
    this._entities = data;
    this.filteredEntities = data;
  };
  get entities(): unknown[] {
    return this._entities;
  }

  @Input() resetAfterSelect = false;

  @Output()
  select: EventEmitter<number> = new EventEmitter<number>();

  public control = new FormControl('');
  public filteredEntities: unknown[] = [];

  private _entities: unknown[] = [];
  private unsubscribe$: Subject<void> = new Subject();

  constructor() {
    super();
  }

  ngOnInit() {
    this.control.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        map(value => this.filter(value)),
      )
      .subscribe((data: unknown[]) => {
        this.filteredEntities = data;
      });
  }

  private filter(value: string): any[] {
    if (!(value?.trim instanceof Function)) { return this.entities; }
    const filterValue = value.toLowerCase().trim();
    return this.entities.filter(option => option[this.showBy].toLowerCase().includes(filterValue));
  }

  public onSelect(id: number|string): void {
    this.select.emit(+id);
    if (this.resetAfterSelect) {
      this.control.setValue('');
      this.field.nativeElement.blur();
    }
  }

  public displayFn(item: unknown): string {
    if (!item) { return ''; }
    return item?.[this.showBy] || '';
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
