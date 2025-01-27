import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { SpinnerService } from '../../shared/services/spinner.service';
import { inject } from '@angular/core';
import { finalize, Observable } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const spinnerService = inject(SpinnerService);
  // Show the spinner for GET requests
  if (req.method === 'GET') {
    spinnerService.show();
  }

  return next(req).pipe(
    finalize(() => {
      // Hide the spinner when the request completes
      if (req.method === 'GET') {
        spinnerService.hide();
      }
    })
  );
};
