import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (_route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const url = state?.url ?? '';

  if (url.startsWith('/admin') && role !== 'admin') {
    router.navigate(['/public/home']);
    return false;
  }

  return true;
};

export const guestGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (token) {
    router.navigate([role === 'admin' ? '/admin/dashboard' : '/public/home']);
    return false;
  }
  return true;
};
