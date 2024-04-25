import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats.component';
import { ChatsRouting } from './chats.routing';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';


@NgModule({
  declarations: [
    ChatsComponent,
    ChatMessagesComponent
  ],
  imports: [
    ChatsRouting,
    CommonModule
  ]
})
export class ChatsModule { }
