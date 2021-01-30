import { NgModule } from '@angular/core';
import { WebsocketService } from 'src/app/common/services/websocket.service';
import { ChatsSidebarComponent } from './components/chats-sidebar/chats-sidebar.component';
import { ChatItemComponent } from './components/chats-sidebar/components/chat-item/chat-item.component';
import { DataAdapter } from './data-adapter/data-adapter.service';
import { ChatComponent } from './chat.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat.routes';
import { IrisFieldsModule } from 'src/app/common/modules/fields/fields.module';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    IrisFieldsModule,
  ],
  declarations: [
    ChatComponent,
    ChatItemComponent,
    ChatsSidebarComponent,
    ChatRoomComponent,
  ],
  providers: [
    DataAdapter,
    WebsocketService,
  ],
})
export class ChatModule { }