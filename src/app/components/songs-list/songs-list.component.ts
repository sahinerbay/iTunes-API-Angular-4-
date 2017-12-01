import { Component, OnInit } from '@angular/core';
import { HttpItunesService } from './../../services/http-itunes.service';
import { ShareDataService } from './../../services/share-data.service';
import { Itunes } from './../../interfaces/itunes';

@Component({
	selector: 'app-songs-list',
	templateUrl: './songs-list.component.html',
	styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

	constructor(private httpItunesService: HttpItunesService, private shareDataService: ShareDataService) { }

	private songsList: Itunes = {
		resultCount: null,
		results: [],
		isModalActive: false,
		currentSong: null
	}

	ngOnInit() {
		this.storeSongs();
		this.getSongsList();
	}

	storeSongs() {
		this.httpItunesService.getPosts()
			.subscribe((result: Itunes) => {
				let state = Object.assign({}, result, {
					isModalActive: this.songsList.isModalActive
				});
				this.shareDataService.updateState(state);
			})
	}

	getSongsList() {
		this.shareDataService.getState()
			.subscribe((result: Itunes) => {
				this.songsList = result;
				console.log(result.isModalActive)
			})
	}

}
