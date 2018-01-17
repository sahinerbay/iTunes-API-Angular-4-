import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment.prod';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  isLoggedIn() {
	return this.http.get(`${environment.SERVER_URL}`, {withCredentials: true});
  }

  logOut() {
	  return this.http.post(`${environment.SERVER_URL}/api/logout`, {withCredentials: true});
  }

}
