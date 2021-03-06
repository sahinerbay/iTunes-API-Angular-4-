import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-form-validator',
	template: `
	<ng-template [ngIf]="shouldShowErrors()">
		<p class="error" *ngFor="let error of listOfErrors()">{{error}}</p>
	</ng-template>
	`,
	styleUrls: ['./form-validator.component.scss']
})
export class FormValidatorComponent {

	private static readonly errorMessages = {
		'required': (params, name) => `${name} required!`,
		'pattern': (params, name) => `${name} not valid!`,
	};

	@Input()
	private control: AbstractControlDirective | AbstractControl;

	@Input()
	private form: boolean;
	
	@Input()
	private type: string

	shouldShowErrors(): boolean {
		return (this.form) || (this.control && this.control.errors && (this.control.dirty || this.control.touched));
	}

	listOfErrors(): string[] {
		if (this.control.errors) {
			return Object.keys(this.control.errors)
				.map(errorType => {
					return this.getMessage(errorType, this.control.errors[errorType], this.type)
				});
		}
	}

	getMessage(type: string, params: any, name: any) {
		return FormValidatorComponent.errorMessages[type](params, name);
	}

}
