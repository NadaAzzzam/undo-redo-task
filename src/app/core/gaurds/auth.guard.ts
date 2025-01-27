import { inject } from '@angular/core';
import { CanActivateFn, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  // Redirect to login page
  return router.createUrlTree(['/auth/login']);
  // return true
};
