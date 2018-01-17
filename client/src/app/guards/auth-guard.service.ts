import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { ApiResponse } from './../interfaces/api';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(private router: Router, private authenticationService: AuthenticationService) { }

	canActivate(): any {
		return this.authenticationService.isLoggedIn()
		.map((result: ApiResponse) => {
			console.log(result)
			if (result.auth) {
				return true
			} else {
				this.router.navigate(['/login'], { skipLocationChange: true });
				return false;
			}
		})

	}

}
