import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Itunes } from '@app/interfaces/itunes';

@Injectable()
export class ShareDataService {

	constructor() { }

	private defaultState: Itunes = {
		resultCount: null,
		results: [],
		isModalActive: false,
		currentSong: Object
	}

	private currentState = new BehaviorSubject<Itunes>(this.defaultState);
	
	getState(): Observable<Itunes> {
		return this.currentState.asObservable();
	}

	updateState(data: Itunes) {
		this.currentState.next(data)
	}

	updateModalActivity(modalActivity: boolean) {
		let state = Object.assign({}, this.currentState.value, {
			isModalActive: modalActivity
		});
		this.currentState.next(state)
	}

	updateCurrentSong(currentId:number) {
		let state = Object.assign({}, this.currentState.value, {
			currentSong: this.currentState.value.results.filter((song:any) => song.trackId === currentId )
		});
		this.currentState.next(state)
	}

}
