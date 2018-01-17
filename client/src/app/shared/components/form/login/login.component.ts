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

	isLoggedIn: Boolean;
	private status_code: String;

	onSubmit(form) {
		if (form.valid) {
			this.httpService.loginUser(form.value).subscribe((result: ApiResponse) => {
				this.isLoggedIn = true;
				if (result.status === "success") {
					this.router.navigate(['/'], { skipLocationChange: true });
				} else if (result.status === "failed") {
					this.status_code = result.code;
				}
			},
				(err) => console.log(err))
		}
	}

	setModal(event) {
		this.isLoggedIn = event;
	}

}
