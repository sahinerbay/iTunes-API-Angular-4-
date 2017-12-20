import { Component } from '@angular/core';
import { HttpItunesService } from './../../../../services/http-itunes.service';
import { Router } from '@angular/router';
import { ApiResponse } from './../.././../../interfaces/api';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

	constructor(private httpService: HttpItunesService, private router: Router) { };

	private isLoggedIn: Boolean;
	private status_code: String;

	onSubmit(form) {
		if (form.valid) {
			this.isLoggedIn = true;
			this.httpService.registerUser(form.value).subscribe((result: ApiResponse) => {
				if (result.status === "success") {
					this.router.navigate(['/']);
				} else if (result.status === "failed") {
					this.status_code = result.code;
				}
			},
				err => console.log(err)
			)
		}
	}

	onConfirmPassword(initialPassword, confirmPassword) {
		if (initialPassword.dirty && confirmPassword.dirty) {
			return initialPassword.value !== confirmPassword.value
		}
		return false;
	}

	setModal(event) {
		this.isLoggedIn = event;
	}

}
