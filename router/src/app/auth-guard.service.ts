import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if(authenticated){
                        return true;
                    }else{
                        this.router.navigate(['/']);
                    }
                }
            )
    }
    canActivateChild(router: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(router, state);
    }
}