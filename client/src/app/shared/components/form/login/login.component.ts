import { Component } from '@angular/core';
import { HttpItunesService } from './../../../../services/http-itunes.service';
import { ApiResponse } from './../../../../interfaces/api';
import { Router } from '@angular/router';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	constructor(private httpService: HttpItunesService, private router: Router) { };

	private isLoggedIn: Boolean;

	onSubmit(f) {
		if (f.valid) {
			this.httpService.loginUser(f.value).subscribe((result: ApiResponse) => {
				if (result.loggedIn) {
					this.isLoggedIn = result.loggedIn;
					this.router.navigate(['/']);
				} else {
					console.log(result.message)
				}
			},
				(err) => console.log(err))
		}
	}

}
