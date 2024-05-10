import { Component } from '@angular/core';

@Component({
  selector: 'auc-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {
  newRelay: string = '';
  relays: string[] = ["wss://relay.damus"];

  errorMsg = '';

  checkAndSend(): void{
    let is_valid: boolean = (this.newRelay.substring(0,6) == 'wss://' && !this.relays.includes(this.newRelay));

    if (is_valid){
      this.errorMsg = "";
      this.relays.push(this.newRelay);
    }
    else{
      this.errorMsg = "Invalid Relay";
    }
  }

  removeRelay(index: number): void{
    this.relays.splice(index,1);
  }

}

