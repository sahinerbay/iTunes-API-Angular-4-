import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../environments/environment';

@Injectable()
export class HttpItunesService {

	constructor(private http: HttpClient) { }

	getPosts(): Observable<any> {
		return this.http.get(environment.apiUrl);
	}

}
