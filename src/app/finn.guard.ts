import { CanActivateFn } from '@angular/router';

export const finnGuard: CanActivateFn = (route, state) => {
  return true;
};
