import { Component, OnInit } from '@angular/core';
import { HttpItunesService } from './../../../../services/http-itunes.service';
import { ApiResponse } from './../../../../interfaces/api';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(private httpService: HttpItunesService, private router: Router, private http: HttpClient) { };

	ngOnInit() {
	}

	onSubmit(f) {
		this.httpService.loginUser(f.value).subscribe((result: ApiResponse) => {
			this.http.get('http://localhost:3000/api/').subscribe(result => {

			})
			//this.router.navigate(['/search']);

		},
			(err) => console.log(err))
	}

}
