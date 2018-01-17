import { Component, Input } from '@angular/core';
import { ShareDataService } from '@app/services/share-data.service';
import { Song } from '@app/interfaces/song';

@Component({
	selector: 'app-song-artwork',
	templateUrl: './song-artwork.component.html',
	styleUrls: ['./song-artwork.component.scss']
})
export class SongArtworkComponent {

	constructor(private shareDataService: ShareDataService) { }

	private isModalActive: boolean = false;

	@Input() song: Song;

	setModalActive(event) {
		event.preventDefault();
		this.isModalActive = true;
		this.shareDataService.updateModalActivity(true);
		this.shareDataService.updateCurrentSong(+event.target.attributes['data-id'].value);
		document.body.className = 'overflow-hidden';
	}

}
