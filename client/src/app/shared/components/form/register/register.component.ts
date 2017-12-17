import { Component } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


	onSubmit(f) {
		if (f.valid) {
			console.log(f.value)

		}
	}

	onValid(form, input) {
		if ((form.submitted || input.dirty) && !input.valid) {
			return true
		}
	}
//pattern="^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
}
