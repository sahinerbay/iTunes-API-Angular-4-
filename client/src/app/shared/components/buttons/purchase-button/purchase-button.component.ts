import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-button',
  templateUrl: './purchase-button.component.html',
  styleUrls: ['./purchase-button.component.scss']
})
export class PurchaseButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	}
	
	@Input() price: string;
	@Input() content: string;
	@Input() viewUrl:string;
	
}
