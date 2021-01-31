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
  public room = null;

  public messages = [
    // {
    //   id: 1,
    //   text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste, molestias dignissimos reiciendis esse eveniet quos eaque labore odit et laudantium nesciunt dolore rem iusto quas? Quidem ipsum excepturi laudantium.`,
    //   owner: {
    //     id: 1,
    //     name: 'Din',
    //     avatar: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg',
    //   }
    // },
  ];

  constructor(
    private dataAdapter: DataAdapter,
    private _wsService: WebsocketService,
  ) {
    // this.dataAdapter.selectRoom$.subscribe((roomId: number) => {
    //   this.roomId = roomId;

    //   this.createWsRoom();
    // });
  }

  ngOnInit(): void {}

  private createWsRoom(): void {
    // this._wsService.socket.emit('createRoom', { roomId: this.roomId });
  }

  public onSendMessage(event): void {
    console.log('onSendMessage: ', event);
  }

}
