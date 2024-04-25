import { Component } from '@angular/core';

@Component({
  selector: 'auc-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent {
  contacts = [
    {
      npub: "npub010e310391301djk1o",
      name: "Joaozinho",
      profile: "https://imgproxy.coracle.social/x/s:280:280/aHR0cHM6Ly9pLm5vc3RyLmJ1aWxkLzQ4YW0uanBn"
    },
    {
      npub: "npub13913819dada13131okdlao",
      name: "Joaquim",
      profile: "https://imgproxy.coracle.social/x/s:280:280/aHR0cHM6Ly9pLm5vc3RyLmJ1aWxkLzQ4YW0uanBn"
    },
    {
      npub: "npub131931931i9i9di19dk",
      name: "Joaozinho",
      profile: "https://imgproxy.coracle.social/x/s:280:280/aHR0cHM6Ly9pLm5vc3RyLmJ1aWxkLzQ4YW0uanBn"
    }
  ]

  
}
