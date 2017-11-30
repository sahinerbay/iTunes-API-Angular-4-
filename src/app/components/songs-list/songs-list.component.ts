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
		results: []
	}

	private songs = [1, 2, 3, 4];

	ngOnInit() {
		this.storeSongs();
		this.getSongsList(this.songsList);
	}

	storeSongs() {
		this.httpItunesService.getPosts()
			.subscribe((result: Itunes) => {
				this.shareDataService.updateState(result);
			})
	}

	getSongsList(songs: Itunes) {
		this.shareDataService.getState()
			.subscribe((result: Itunes) => {
				this.songsList.resultCount = result.resultCount;
				this.songsList.results = result.results;
			})
	}

}
