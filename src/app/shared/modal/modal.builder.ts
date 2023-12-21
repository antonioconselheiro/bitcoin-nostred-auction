import { Type } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { IModalMetadata } from './modal-metadata.interface';
import { ModalableDirective } from './modalable.directive';

export class ModalBuilder<EntryType, ReturnType> {

  private static modalInjectSubject = new Subject<IModalMetadata<unknown, unknown>>();
  static modalInject$ = ModalBuilder.modalInjectSubject;

  private injectData: EntryType | null = null;
  private cssClasses: string[] = [];
  private router?: Router;
  private title?: string;

  private subscription = new Subscription();

  constructor(private component: Type<ModalableDirective<EntryType, ReturnType>>) { }

  setData(data: EntryType): ModalBuilder<EntryType, ReturnType> {
    this.injectData = data;
    return this;
  }

  setTitle(title: string): ModalBuilder<EntryType, ReturnType> {
    this.title = title;
    return this;
  }

  /**
   * Close modal when route change
   */
  setBindToRoute(router: Router): ModalBuilder<EntryType, ReturnType> {
    this.router = router;
    return this;
  }

  setRootCssClasses(classes: string[]): ModalBuilder<EntryType, ReturnType> {
    this.cssClasses = classes;
    return this;
  }

  build(): Observable<ReturnType | void> {
    const response = new Subject<ReturnType>();
    const data = this.injectData as unknown;
    const component = this.component as Type<ModalableDirective<unknown, unknown>>;

    if (this.router) {

      //  FIXME: ignore query params for route change
      this.subscription.add(this.router.events
        .pipe(filter(nagivation => nagivation instanceof NavigationStart))
        .pipe(first())
        .subscribe(() => {
          if (!response.closed) {
            response.complete();
          }
        }));

      this.subscription.add(response.subscribe({
        complete: () => this.subscription.unsubscribe()
      }));
    } else {
      console.warn(
        `Component "${component.name}" used as modal with no route associated`
      );
    }

    ModalBuilder.modalInjectSubject.next({
      component, data,
      cssClasses: this.cssClasses,
      title: this.title,
      response: response as Subject<unknown>
    });

    return response.asObservable();
  }
}
