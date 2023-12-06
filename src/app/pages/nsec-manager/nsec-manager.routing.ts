import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NsecManagerComponent } from './nsec-manager.component';

const routes: Routes = [
  {
    path: '',
    component: NsecManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRouting { }
