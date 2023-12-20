import { Component, Input } from '@angular/core';
import { ErrorConverter, IErrorNormalized } from 'ecma-error-normalizer';

@Component({
  selector: 'auc-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  /**
   * Interceptando o dado desconhecido para convertê-lo
   * a uma estrutura normalizada
   */
  @Input()
  set error(error: IErrorNormalized | null) {
    const normalizedError = this.errorConverter.create(error);
    if (error !== null) {
      console.error(normalizedError);
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
