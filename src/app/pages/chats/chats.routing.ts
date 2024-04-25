import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';

const routes: Routes = [
  {
    path: '',
    component: ChatsComponent,
    pathMatch: 'full'
  },
  {
    path: ':npub',
    component: ChatMessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRouting { }
