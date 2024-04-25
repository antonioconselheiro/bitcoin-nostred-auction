import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'auc-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit{
  constructor(
    private activateRoute:ActivatedRoute
  ){

  }
  

  ngOnInit(): void {
    const npub = this.activateRoute.snapshot.params.npub
    debugger
  }


}
