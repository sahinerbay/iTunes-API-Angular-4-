import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
	selector: 'app-login-validator',
	templateUrl: './login-validator.component.html',
	styleUrls: ['./login-validator.component.scss']
})
export class LoginValidatorComponent {

	@Input()
	code: string;

	@Output() modal = new EventEmitter<boolean>();

	onModalClose(is_active: boolean) {
		this.modal.emit(is_active);
	}

	@HostListener('click', ['$event']) setModalInactive(event) {
		if (event.target.className === 'modal__content__close fa fa-times' || event.target.className === 'modal') {
			this.onModalClose(false);
		}
	}

}
