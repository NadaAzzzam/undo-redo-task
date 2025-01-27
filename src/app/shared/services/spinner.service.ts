import { Injectable, ApplicationRef, ComponentRef, createComponent, EnvironmentInjector } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  // BehaviorSubject to track the loading state
  private isLoading = new BehaviorSubject<boolean>(false);
  // Public observable to allow components to subscribe to loading state changes
  isLoading$ = this.isLoading.asObservable().pipe(
    distinctUntilChanged() // Only emit when the value changes
  );

  // Counter to track the number of active requests
  private activeRequests = 0;
  private readonly debounceTimeMs = 200;

  // Reference to the dynamically created spinner component
  private spinnerComponentRef: ComponentRef<SpinnerComponent> | null = null;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  /**
   * Call this method when a new request starts.
   */
  show() {
    this.activeRequests++;
    if (this.activeRequests === 1) {
      // Delay showing the spinner to prevent flickering
      timer(this.debounceTimeMs)
        .pipe(
          tap(() => {
            if (this.activeRequests > 0) {
              this.isLoading.next(true);
              this.attachSpinner();
            }
          })
        )
        .subscribe();
    }
  }

  /**
   * Call this method when a request completes.
   */
  hide() {
    if (this.activeRequests > 0) {
      this.activeRequests--;
      if (this.activeRequests === 0) {
        // Only hide the spinner if there are no more active requests
        this.isLoading.next(false);
        this.detachSpinner();
      }
    } else {
      // Log a warning if hide() is called more times than show()
      console.warn('SpinnerService: hide() called more times than show()');
    }
  }

  /**
   * Dynamically attach the spinner component to the DOM.
   */
  private attachSpinner() {
    if (!this.spinnerComponentRef) {
      // Dynamically create the SpinnerComponent
      this.spinnerComponentRef = createComponent(SpinnerComponent, {
        environmentInjector: this.injector,
      });

      // Attach the component to the DOM
      document.body.appendChild(this.spinnerComponentRef.location.nativeElement);

      // Register the component with Angular's change detection
      this.appRef.attachView(this.spinnerComponentRef.hostView);
    }
  }

  /**
   * Dynamically detach the spinner component from the DOM.
   */
  private detachSpinner() {
    if (this.spinnerComponentRef) {
      // Detach the component from Angular's change detection
      this.appRef.detachView(this.spinnerComponentRef.hostView);

      // Remove the component from the DOM
      this.spinnerComponentRef.destroy();
      this.spinnerComponentRef = null;
    }
  }
}
