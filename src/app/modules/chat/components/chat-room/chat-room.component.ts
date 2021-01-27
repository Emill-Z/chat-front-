import { Component, Input, OnInit } from '@angular/core';
import { WebsocketService } from '../../../../common/services/websocket.service';
import { DataAdapter } from '../../data-adapter/data-adapter.service';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  public roomId: number = null;

  constructor(
    private dataAdapter: DataAdapter,
    private _wsService: WebsocketService,
  ) {
    this.dataAdapter.selectRoom$.subscribe((roomId: number) => {
      this.roomId = roomId;

      this.createWsRoom();
    });
  }

  ngOnInit(): void {}

  private createWsRoom(): void {
    // this._wsService.socket.emit('createRoom', { roomId: this.roomId });
  }

}
