import { Component, OnInit } from '@angular/core';
import { HttpItunesService } from './../../services/http-itunes.service';
import { ShareDataService } from './../../services/share-data.service';
import { Itunes } from './../../interfaces/itunes';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-songs-list',
	templateUrl: './songs-list.component.html',
	styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

	constructor(private httpItunesService: HttpItunesService, private shareDataService: ShareDataService, private route: ActivatedRoute) { }

	songsList: Itunes = {
		resultCount: null,
		results: [],
		isModalActive: false,
		currentSong: null
	}

	ngOnInit() {
		this.route.queryParamMap
		.subscribe(params => {
			this.storeSongs(params.get('term'));
		})
		
		this.getSongsList();
	}

	storeSongs(search_term:String) {
		this.httpItunesService.getPosts(search_term)
			.subscribe((result: Itunes) => {
				let state = Object.assign({}, result, {
					isModalActive: this.songsList.isModalActive,
					results: result.results
				});
				this.shareDataService.updateState(state);
			})
	}

	getSongsList() {
		this.shareDataService.getState()
			.subscribe((result: Itunes) => {
				this.songsList = result;
			})
	}

}
