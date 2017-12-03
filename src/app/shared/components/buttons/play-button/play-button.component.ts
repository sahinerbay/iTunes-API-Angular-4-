import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
	selector: 'app-play-button',
	templateUrl: './play-button.component.html',
	styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit, AfterViewInit {

	constructor(private renderer: Renderer2) { }

	private textContent: string = "Play";
	private icon: string = "fa fa-play-circle";

	ngOnInit() {
	}

	toggleButton() {
		if (this.textContent === "Play") {
			this.textContent = "Pause";
			this.icon = "fa fa-pause-circle"
		} else {
			this.textContent = "Play"
			this.icon = "fa fa-play-circle"
		}
	}

	@Input() songUrl;

	@ViewChild('music') private music: ElementRef;
	@ViewChild('playerButton') private playerButton: ElementRef;
	@ViewChild('timeline') private timeline: ElementRef;
	@ViewChild('playHead') private playHead: ElementRef;

	private duration;
	private timelineWidth;
	private onplayhead: boolean = false;
	private templateDom;

	/*Remove Event Listeners */
	private musicListenerFn: () => void;

	ngAfterViewInit() {

		this.duration = this.music.nativeElement.duration;
		this.timelineWidth = this.timeline.nativeElement.offsetWidth - this.playHead.nativeElement.offsetWidth;

		this.renderer.listen(this.playerButton.nativeElement, 'click', () => {
			this.play();
		});

		this.musicListenerFn = this.renderer.listen(this.music.nativeElement, 'timeupdate', () => {
			this.timeUpdate();
			return false;
		});

		this.renderer.listen(this.music.nativeElement, 'canplaythrough', () => {
			this.duration = this.music.nativeElement.duration;
			return false;
		});

		this.renderer.listen(this.timeline.nativeElement, 'click', (event) => {
			this.moveplayhead(event);
			this.music.nativeElement.currentTime = this.duration * this.clickPercent(event);
			return false;
		});
	}

	moveplayhead(event) {
		let newMargLeft = event.clientX - this.getPosition(this.timeline.nativeElement);

		if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
			this.playHead.nativeElement.style.marginLeft = newMargLeft + "px";
		}
		if (newMargLeft < 0) {
			this.playHead.nativeElement.style.marginLeft = "0px";
		}
		if (newMargLeft > this.timelineWidth) {
			this.playHead.nativeElement.style.marginLeft = this.timelineWidth + "px";
		}
	}

	timeUpdate() {
		var playPercent = this.timelineWidth * (this.music.nativeElement.currentTime / this.duration);
		this.playHead.nativeElement.style.marginLeft = playPercent + "px";
		if (this.music.nativeElement.currentTime == this.duration) {
			this.textContent = "Play"
			this.icon = "fa fa-play-circle";
			this.playHead.nativeElement.style.marginLeft = "0px";
		}
	}

	play() {
		if (this.music.nativeElement.paused) {
			this.music.nativeElement.play();

		} else { // pause music
			this.music.nativeElement.pause();

		}
	}

	// returns click as decimal (.77) of the total timelineWidth
	clickPercent(event) {
		return (event.clientX - this.getPosition(event.target)) / this.timelineWidth;
	}

	getPosition(el) {
		return el.getBoundingClientRect().left;
	}

	ngOnDestroy() {
		if (this.musicListenerFn) {
			this.musicListenerFn();
		}
	}

}
