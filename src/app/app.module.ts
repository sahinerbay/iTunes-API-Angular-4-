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
import { SongModalComponent } from './components/songs-list/song-modal/song-modal.component';
/*COMPONENTS -SHARED*/
import { PlayButtonComponent } from './shared/components/buttons/play-button/play-button.component';
import { PurchaseButtonComponent } from './shared/components/buttons/purchase-button/purchase-button.component';
import { AddButtonComponent } from './shared/components/buttons/add-button/add-button.component';
import { SongArtworkComponent } from './shared/components/song-artwork/song-artwork.component';
import { SongInfoComponent } from './shared/components/song-info/song-info.component';



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
