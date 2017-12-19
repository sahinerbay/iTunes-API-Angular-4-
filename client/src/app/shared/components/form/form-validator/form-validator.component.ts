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
		'required': () => 'This field is required',
		'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
	};

	@Input()
	private control: AbstractControlDirective | AbstractControl;
	@Input()
	private form: Boolean;

	shouldShowErrors(): boolean {
		return (this.form && !this.control.touched) || (this.control &&
			this.control.errors &&
			(this.control.dirty || this.control.touched));
	}

	listOfErrors(): string[] {
		return Object.keys(this.control.errors)
			.map(field => this.getMessage(field, this.control.errors[field]));
	}

	getMessage(type: string, params: any) {
		return FormValidatorComponent.errorMessages[type](params);
	}

}
