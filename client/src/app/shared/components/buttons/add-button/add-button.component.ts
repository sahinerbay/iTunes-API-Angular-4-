import { Component, OnInit, Input } from '@angular/core';
import { HttpItunesService } from '@app/services/http-itunes.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  constructor(private httpService: HttpItunesService) { }

  ngOnInit() {
	}
	
	@Input() content:string;
	@Input() song;

	addSong(song) {
		this.httpService.addSong(song);
	}

}
