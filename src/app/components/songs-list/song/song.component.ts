import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from './../../../services/share-data.service';
import { Itunes } from './../../../interfaces/itunes';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

	constructor(private shareDataService: ShareDataService) { }
	
	private isModalActive: boolean = false;

	setModalActive(event) {
		event.preventDefault();
		this.isModalActive = true;
		this.shareDataService.updateModalActivity(true);
	}

	@Input() song: Array<string>;

  ngOnInit() {
		this.shareDataService.getState() 
		.subscribe((result:Itunes) => {
			this.isModalActive = result.isModalActive;
		})
  }

}
