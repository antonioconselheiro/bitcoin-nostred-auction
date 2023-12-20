import { ICustomErrorAdapter, IErrorNormalized } from 'ecma-error-normalizer';

/**
 * Implement the ICustomErrorAdapter interface.
 */
export class StringErrorAdapter implements ICustomErrorAdapter<string> {

  /**
   * Include a single name to your adapter
   */
  name = 'string';

  typeCheck(throwing: unknown): throwing is string {
    return typeof throwing === 'string';
  }

  normalize(message: string): IErrorNormalized {

    return {
      name: this.name,
      type: 'business',
      messages: [message],
      technicalMessages: ['string was thrown as an error'],
      //  this property will be override with the error
      originalInformation: null
    };
  }
}
