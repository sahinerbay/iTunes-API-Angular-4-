import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from './../../../services/share-data.service';

@Component({
  selector: 'app-song-artwork',
  templateUrl: './song-artwork.component.html',
  styleUrls: ['./song-artwork.component.scss']
})
export class SongArtworkComponent implements OnInit {

	constructor(private shareDataService: ShareDataService) { }
	
	private isModalActive: boolean = false;

  ngOnInit() {
	}
	
	setModalActive(event) {
		event.preventDefault();
		this.isModalActive = true;
		this.shareDataService.updateModalActivity(true);
		this.shareDataService.updateCurrentSong(+event.target.attributes[3].value)
	}

	@Input() song: Array<string>;

}
