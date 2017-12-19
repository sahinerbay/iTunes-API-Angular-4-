import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  isLoggedIn() {
	return this.http.get('http://localhost:3000/', {withCredentials: true});
  }

  logOut() {
	  return this.http.get('http://localhost:3000/api/logout', {withCredentials: true});
  }

}
