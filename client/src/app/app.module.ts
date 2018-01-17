/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from'./app-routing.module';

/*SERVICES*/
import { HttpItunesService } from './services/http-itunes.service';
import { ShareDataService } from './services/share-data.service';
import { MyHttpLogInterceptor } from './services/my-http-log-interceptor.service';
import { AuthenticationService } from './services/authentication.service';


/*COMPONENTS*/
import { AppComponent } from './app.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongComponent } from './components/songs-list/song/song.component';
import { SongModalComponent } from './components/songs-list/song-modal/song-modal.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
/*COMPONENTS -SHARED*/
import { PlayButtonComponent } from './shared/components/buttons/play-button/play-button.component';
import { PurchaseButtonComponent } from './shared/components/buttons/purchase-button/purchase-button.component';
import { AddButtonComponent } from './shared/components/buttons/add-button/add-button.component';
import { SongArtworkComponent } from './shared/components/song-artwork/song-artwork.component';
import { SongInfoComponent } from './shared/components/song-info/song-info.component';
import { RegisterComponent } from './shared/components/form/register/register.component';
import { LoginComponent } from './shared/components/form/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeLogoComponent } from './shared/components/home-logo/home-logo.component';
import { FormValidatorComponent } from './shared/components/form/form-validator/form-validator.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginValidatorComponent } from './shared/components/form/login/login-validator/login-validator.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { PlaylistComponent } from './components/pages/playlist/playlist.component';

@NgModule({
	declarations: [
		AppComponent,
		SongsListComponent,
		SongComponent,
		SongModalComponent,
		PlayButtonComponent,
		PurchaseButtonComponent,
		AddButtonComponent,
		SongArtworkComponent,
		SongInfoComponent,
		SearchBarComponent,
		RegisterComponent,
		LoginComponent,
		HeaderComponent,
		HomeLogoComponent,
		FormValidatorComponent,
		HomeComponent,
		LoginValidatorComponent,
		FavoritesComponent,
		PlaylistComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [
		HttpItunesService,
		ShareDataService,
		AuthenticationService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MyHttpLogInterceptor,
			multi: true,
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
