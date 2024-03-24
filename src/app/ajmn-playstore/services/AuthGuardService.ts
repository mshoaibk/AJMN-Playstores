import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private msalService: MsalService, private router: Router) {}

  canActivate(): boolean {
    if (this.msalService.instance.getAllAccounts().length > 0) {
      // User is authenticated, allow access
      return true;
    } else {
      // User is not authenticated, redirect to home
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
}
