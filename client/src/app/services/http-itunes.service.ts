import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '@env/environment.prod';

@Injectable()
export class HttpItunesService {

	constructor(private http: HttpClient) { }

	getPosts(search_term:String): Observable<any> {
		let URL = `${environment.apiUrl}search?term=${search_term}&entity=musicVideo`;
		return this.http.get(URL);
	}

	registerUser(userProps) {
		return this.http.post(`${environment.SERVER_URL}/api/register`, userProps, {withCredentials: true});
	}

	loginUser(userProps) {
		return this.http.post(`${environment.SERVER_URL}/api/login`, userProps, {withCredentials: true})
	}
	
	
	addSong(songProps) {
		return this.http.post(`${environment.SERVER_URL}/api/favorites`, songProps, {withCredentials: true});
	}
}
