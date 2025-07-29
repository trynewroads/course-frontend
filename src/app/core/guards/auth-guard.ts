import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@tnr/features/auth/services/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.me().pipe(
    map((user) => {
      return true;
    }),
    catchError(() => {
      router.navigate(['/auth/login']);
      return of(false);
    }),
  );
};
