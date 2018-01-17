import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '@app/services/share-data.service';
import { Itunes } from '@app/interfaces/itunes';
import { Song } from '@app/interfaces/song'

@Component({
	selector: 'app-song-modal',
	templateUrl: './song-modal.component.html',
	styleUrls: ['./song-modal.component.scss']
})
export class SongModalComponent implements OnInit {

	constructor(private shareDataService: ShareDataService) { }

	private isModalActive: boolean = false;
	song: Song;

	ngOnInit() {
		this.shareDataService.getState()
			.subscribe((result: Itunes) => {
				this.isModalActive = result.isModalActive;
				this.song = result.currentSong[0];
			})
	}

	setModalInactive(event) {
		if (event.target.className === 'modal__content__close' || event.target.className === 'modal') {
			this.isModalActive = false;
			this.shareDataService.updateModalActivity(false);
			document.body.className = 'overflow-visible';
		}
	}

}
