import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorConverter } from 'ecma-error-normalizer';
import { MainErrorObservable } from './main-error.observable';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor(
    private errorConverter: ErrorConverter,
    private mainError$: MainErrorObservable
  ) { }

  // A verificação da existência da proprieade 'rejection' impede que este argumento seja unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(error: any): void {
    error = error && error.rejection || error;
    const errorNormalized = this.errorConverter.create(error);

    this.mainError$.next(errorNormalized);
  }
}
