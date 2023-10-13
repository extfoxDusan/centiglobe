import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

export const isLoggedGuard: CanActivateFn = () => {
  const auth = inject(AuthorizationService);
  const router = inject(Router);

  if (auth.currentUser !== null) {
    return true;
  }

  router.navigate(['authorization/login']).then();
  return false;
};
