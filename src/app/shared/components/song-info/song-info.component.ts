import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.scss']
})
export class SongInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	}
	
	@Input() song;

}
