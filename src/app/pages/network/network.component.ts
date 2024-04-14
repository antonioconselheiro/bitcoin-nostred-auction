import { Component } from '@angular/core';

@Component({
  selector: 'auc-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {
  newRelay = 'Testing';
  relays = ['admakda','dd','ww']

  send(): void{
    this.relays.push(this.newRelay)
  }
}
