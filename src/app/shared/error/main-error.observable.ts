import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MainErrorObservable extends Subject<unknown | null> {

  private static instance: MainErrorObservable | null = null;

  constructor() {
    super();
    if (!MainErrorObservable.instance) {
      MainErrorObservable.instance = this;
    }

    return MainErrorObservable.instance;
  }
}
