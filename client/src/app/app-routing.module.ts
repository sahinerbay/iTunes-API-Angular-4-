import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*COMPONENTS*/
import { RegisterComponent } from './shared/components/form/register/register.component';
import { LoginComponent } from './shared/components/form/login/login.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { HomeComponent } from './components/pages/home/home.component';

import { AuthGuardService } from './guards/auth-guard.service';

const appRoutes: Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '', component: HomeComponent, canActivate: [AuthGuardService]},
	{ path: 'search', component: SongsListComponent, canActivate: [AuthGuardService] }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		AuthGuardService
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
