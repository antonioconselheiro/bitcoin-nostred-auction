import { Component, Input } from '@angular/core';
import { ErrorConverter, IErrorNormalized } from 'ecma-error-normalizer';

@Component({
  selector: 'auc-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  @Input()
  set error(error: IErrorNormalized | null) {
    this.interceptedError = this.errorConverter.create(error);
    if (error !== null) {
      console.error(this.interceptedError);
    }
  }

  get error(): IErrorNormalized | null {
    return this.interceptedError;
  }

  private interceptedError: IErrorNormalized | null = null;

  constructor(
    private errorConverter: ErrorConverter
  ) { }

  trackByFn(index: number): number {
    return index;
  }

  closeError(): void {
    this.error = null;
  }
}
