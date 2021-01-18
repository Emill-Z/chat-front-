import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { ChatsSidebarComponent } from './components/chats-sidebar/chats-sidebar.component';
import { ChatItemComponent } from './components/chats-sidebar/components/chat-item/chat-item.component';
import { UserService } from './common/http-services/User.service';
import { AuthInterceptor } from './common/http-services/AuthInterceptor.interceptor';
import { DataAdapter } from '../app/data-adapter/data-adapter.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ChatRoomComponent,
    ChatsSidebarComponent,
    ChatItemComponent
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    UserService,
    DataAdapter,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
