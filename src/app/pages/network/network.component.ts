import { Component } from '@angular/core';

@Component({
  selector: 'auc-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {
  newRelay: string = '';
  relays: string[] = [];

  errorMsg = '';

  checkAndSend(): void{
    let is_valid: boolean = (this.newRelay.includes('wss://') && !this.relays.includes(this.newRelay));
    
    if (is_valid){
      this.errorMsg = "";
      this.relays.push(this.newRelay);
    }
    else{
      this.errorMsg = "Error";
    }
  }

  removeRelay(index: number): void{
    this.relays.splice(index,1);
  }
}
