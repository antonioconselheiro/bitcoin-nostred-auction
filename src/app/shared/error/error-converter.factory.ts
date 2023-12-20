import { CommonErrorAdapter, ErrorConverter, NormalizedErrorAdapter } from 'ecma-error-normalizer';
import { StringErrorAdapter } from './adapter/string-error.adapter';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const errorConverterFactory = () => new ErrorConverter([
  NormalizedErrorAdapter,
  StringErrorAdapter,
  CommonErrorAdapter.setDefaultMessage('An unexpected error occurred'),
]);
