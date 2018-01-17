import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(private router: Router, private authenticationService: AuthenticationService) { }

	ngOnInit() {
	}

	onLogOut() {
		this.authenticationService.logOut()
		.subscribe(result=> console.log(result))
		this.router.navigate(['/login'], { skipLocationChange: true });
	}

}
