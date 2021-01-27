import { Component } from '@angular/core';
import { DataAdapter } from './data-adapter/data-adapter.service';
import { WebsocketService } from '../../common/services/websocket.service';
import { RespDataI } from 'src/app/common/models/graphql.interface';

interface MeI {
  me: {
    id: string;
    rooms: any;
  }
}

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

    this._dataAdapter.getMe(1).subscribe((resp: RespDataI<MeI>) => {
      this.rooms = resp?.data.me?.rooms;
    })

    // this._wsService.connect();
  }

}
