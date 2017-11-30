import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from './../../../../services/share-data.service';
import { Itunes } from './../../../../interfaces/itunes';

@Component({
	selector: 'app-song-modal',
	templateUrl: './song-modal.component.html',
	styleUrls: ['./song-modal.component.scss']
})
export class SongModalComponent implements OnInit {

	constructor(private shareDataService: ShareDataService) { }

	private isModalActive: boolean = false;

	@Input() song: Array<string>;

	ngOnInit() {
		this.shareDataService.getState()
			.subscribe((result: Itunes) => {
				this.isModalActive = result.isModalActive;
			})
	}

	setModalInactive(event) {
		if (event.target.className === 'modal__content__close' || event.target.className === 'modal') {
			this.isModalActive = false;
			this.shareDataService.updateModalActivity(false);
		}
	}

}
