import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../environments/environment';

@Injectable()
export class HttpItunesService {

	constructor(private http: HttpClient) { }

	getPosts(search_term:String): Observable<any> {
		let URL = `${environment.apiUrl}search?term=${search_term}&entity=musicVideo`;
		return this.http.get(URL);
	}

	registerUser(userProps) {
		return this.http.post('http://localhost:3000/api/register', userProps);
	}

	loginUser(userProps) {
		return this.http.post('http://localhost:3000/api/login', userProps, {withCredentials: true})
	}
	//search?term=jack+johnson
}
