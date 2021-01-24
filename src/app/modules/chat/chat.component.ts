import { Component } from '@angular/core';
import { DataAdapter } from './data-adapter/data-adapter.service';
import { WebsocketService } from '../../common/services/websocket.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public rooms = [];

  constructor(
    private _dataAdapter: DataAdapter,
    private _wsService: WebsocketService,
  ) {
    this._dataAdapter.getMe().subscribe((data) => {
      this.rooms = data.rooms;
    });

    this._wsService.connect();
  }

}
