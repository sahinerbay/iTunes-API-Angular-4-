import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpItunesService {

	constructor(private http: HttpClient) { }

	private url: string = "https://itunes.apple.com/search?term=jack+johnson";

	getPosts(): Observable<any> {
		return this.http.get(this.url);
	}

}
