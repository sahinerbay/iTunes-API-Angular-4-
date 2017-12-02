import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-play-button',
	templateUrl: './play-button.component.html',
	styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	private textContent: string = "Play";
	private icon: string = "fa fa-play-circle";

	toggleButton() {
		if (this.textContent === "Play") {
			this.textContent = "Pause";
			this.icon = "fa fa-pause-circle"
		} else {
			this.textContent = "Play"
			this.icon = "fa fa-play-circle"
		}

	}

}
