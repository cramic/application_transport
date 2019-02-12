import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestapiService } from '../services/restapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private restapiService: RestapiService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.restapiService.isLoggedIn().pipe(map(data => {
      if (data) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }));

  }
}
