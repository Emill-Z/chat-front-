import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';

const CHAT_ROUTES: Routes = [
  {
    path: '',
    component: ChatComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CHAT_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})
export class ChatRoutingModule { }
