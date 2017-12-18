import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { ApiResponse } from './../interfaces/api';
import { Observable } from "rxjs/Rx";


@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(private router: Router, private authenticationService: AuthenticationService) { }

	canActivate():any {
		// this.authenticationService.isLoggedIn()
		// 	.subscribe((result:ApiResponse)=> {
		// 		console.log(result)
		// 		if(result.auth) return true;
		// 		return false;
		// 	}, (err) => console.log(err))

	
	}

}
