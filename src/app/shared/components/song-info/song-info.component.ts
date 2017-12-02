import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { ShareDataService } from './../../../services/share-data.service';

@Component({
	selector: 'app-song-info',
	templateUrl: './song-info.component.html',
	styleUrls: ['./song-info.component.scss']
})
export class SongInfoComponent implements OnInit {

	constructor(private shareDataService: ShareDataService, private renderer: Renderer2) { }

	ngOnInit() {
	}

	@Input() song: Array<string>;

	setModalActive(event) {
		event.preventDefault();
		this.shareDataService.updateModalActivity(true);
		this.shareDataService.updateCurrentSong(+event.target.attributes[2].value);
		document.body.className = 'overflow-hidden';
	}

	findTrackId() {	 	   
		const element = this.renderer.selectRootElement('.artwork__link img');
		return element.attributes['data-id'].value;
	}

}
