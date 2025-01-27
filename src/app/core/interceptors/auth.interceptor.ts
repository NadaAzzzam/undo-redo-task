import { inject } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, filter, map, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../models/auth-response.model';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Clone the request and add the authorization header if a token exists
  const token = authService.getToken();
  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // Pass the cloned request to the next handler
  return next(authReq).pipe(
    // Filter to ensure we only process HttpResponse events
    filter((event: HttpEvent<any>) => event instanceof HttpResponse),

    // Use map to handle the HttpResponse
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // Example: Modify the response body
        const modifiedBody = { ...event.body, customField: 'customValue' };
        return event.clone({ body: modifiedBody });
      }
      return event;
    }),

    // Handle errors
    catchError((error) => {
      if (error.status === 401) {
        // Attempt to refresh the token
        return authService.refreshToken().pipe(
          switchMap((response: AuthResponse) => {
            // Update the token in the service
            authService.setToken(response.token);

            // Clone the original request with the new token
            const retryReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${response.token}`,
              },
            });

            // Retry the request with the new token
            return next(retryReq);
          }),
          catchError((refreshError) => {
            // If token refresh fails, logout and redirect to login
            authService.logout();
            router.navigate(['/auth/login']);
            return throwError(() => refreshError);
          })
        );
      }

      // Propagate other errors
      return throwError(() => error);
    })
  );
};
