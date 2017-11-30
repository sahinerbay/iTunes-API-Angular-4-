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


@NgModule({
	declarations: [
		AppComponent,
		SongsListComponent,
		SongComponent,
		SongModalComponent
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
