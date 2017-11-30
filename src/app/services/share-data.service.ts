import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Rx';
import { Itunes } from './../interfaces/itunes';

@Injectable()
export class ShareDataService {

	constructor() { }

	private currentState = new ReplaySubject<Itunes>(1);

	updateState(data: Itunes) {
		this.currentState.next(data)
	}

	getState(): Observable<Itunes> {
		return this.currentState.asObservable();
	}

}
