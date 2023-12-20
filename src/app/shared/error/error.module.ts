import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorConverter } from 'ecma-error-normalizer';
import { errorConverterFactory } from './error-converter.factory';
import { ErrorHandlerService } from './error-handler.service';
import { ErrorComponent } from './error.component';
import { MainErrorObservable } from './main-error.observable';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorComponent
  ],
  exports: [
    ErrorComponent
  ],
  providers: [
    MainErrorObservable,
    {
      provide: ErrorConverter,
      useFactory: errorConverterFactory
    },

    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    }
  ]
})
export class ErrorModule { }
