import { Component } from '@angular/core';
import { DataAdapter } from './data-adapter/data-adapter.service';
import { WebsocketService } from '../../common/services/websocket.service';
import { RespDataI } from 'src/app/common/models/graphql.interface';
import { AuthService } from 'src/app/common/services/auth.service';
import { MeI } from 'src/app/common/models/user.interface';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public rooms = [];

  constructor(
    private dataAdapter: DataAdapter,
    private _wsService: WebsocketService,
    private readonly authService: AuthService
  ) {

    this.init();

    // this._wsService.connect();
  }

  private init(): void {
    // TODO: unsubscribe
    // https://apollo-angular.com/docs/data/queries/
    const { id } = this.authService.getUser();
    if (!id) { return; }

    this.dataAdapter.getMe(Number(id)).subscribe((resp: RespDataI<{ me: MeI}>) => {
      if (resp?.data.me) {
        // this.rooms = resp.data.me.rooms;
        this.dataAdapter.setUser(resp.data.me);
      }
    });

    this.dataAdapter.selectedRoom$.subscribe((user => {
      if (!user) { return; }
      this.rooms.push({
        avatar: null,
        active: false,
        lastMessage: null,
        ...user
      });
    }));
  }

}
