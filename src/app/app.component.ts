import { Component } from '@angular/core';
import { DataAdapter } from './data-adapter/data-adapter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public rooms = [];

  constructor(
    private _dataAdapter: DataAdapter,
  ) { 
    this._dataAdapter.getMe().subscribe((data) => {
      this.rooms = data.rooms;
    });
  }
}
