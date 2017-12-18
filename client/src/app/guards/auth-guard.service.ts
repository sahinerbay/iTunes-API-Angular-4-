import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { ApiResponse } from './../interfaces/api';
import { Observable } from "rxjs/Rx";


@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(private router: Router, private authenticationService: AuthenticationService) { }

	canActivate(): any {
		return this.authenticationService.isLoggedIn()
			.map((result: ApiResponse) => {
				if (result.auth) {
					console.log('auth works')
					return true
				};
				//return this.router.navigate(['/login']);
			}).catch(() => {
            this.router.navigate(['/login']);
            return Observable.of(false);
        });


	}

}
