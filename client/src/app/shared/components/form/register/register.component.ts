import { Component } from '@angular/core';
import { HttpItunesService } from './../../../../services/http-itunes.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

		constructor(private httpService: HttpItunesService){};

	onSubmit(f) {
		console.log(f.value)
			this.httpService.registerUser(f.value).subscribe((res)=> {
				console.log(res)
			},
			err => console.log(err)
		)
	}

	onValid(form, input) {
		if ((form.submitted || input.dirty) && !input.valid) {
			return true
		}
	}
//pattern="^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
}
