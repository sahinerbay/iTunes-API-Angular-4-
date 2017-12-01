/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*SERVICES*/
import { HttpItunesService } from './services/http-itunes.service';
import { ShareDataService } from './services/share-data.service';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongComponent } from './components/songs-list/song/song.component';
import { SongModalComponent } from './components/songs-list/song/song-modal/song-modal.component';
import { PlayButtonComponent } from './components/shared/play-button/play-button.component';
import { PurchaseButtonComponent } from './components/shared/purchase-button/purchase-button.component';
import { AddButtonComponent } from './components/shared/add-button/add-button.component';


@NgModule({
	declarations: [
		AppComponent,
		SongsListComponent,
		SongComponent,
		SongModalComponent,
		PlayButtonComponent,
		PurchaseButtonComponent,
		AddButtonComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [
		HttpItunesService,
		ShareDataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
