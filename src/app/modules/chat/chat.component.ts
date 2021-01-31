import { Component } from '@angular/core';
import { DataAdapter } from './data-adapter/data-adapter.service';
import { WebsocketService } from '../../common/services/websocket.service';
import { RespDataI } from 'src/app/common/models/graphql.interface';
import { AuthService } from 'src/app/common/services/auth.service';

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
    private readonly authService: AuthService
  ) {

    this.init();

    // this._wsService.connect();
  }

  private init(): void {
    // TODO: unsubscribe
    // https://apollo-angular.com/docs/data/queries/
    const id = this.authService.getUser()?.id;
    if (!id) { return; }

    this._dataAdapter.getMe(Number(id)).subscribe((resp: RespDataI<MeI>) => {
      if (resp?.data.me) {
        this.rooms = resp.data.me.rooms;
        this._dataAdapter.setUser(resp.data.me);
      }
    })
  }

}
