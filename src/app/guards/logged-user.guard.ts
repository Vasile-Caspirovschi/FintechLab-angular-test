import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectLoggedUser } from '../store/user/selectors';
import { map } from 'rxjs';

export const loggedUserGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);
  return store.select(selectLoggedUser).pipe(
    map(user => {
      if (!user)
        router.navigateByUrl('/');
      return !!user;
    })
  );
};
