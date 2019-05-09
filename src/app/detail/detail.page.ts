import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { exampleData } from '../example-data'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
	private curItem;

  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  	let curItemId = this.activatedRoute.snapshot.params.id;

  	exampleData.forEach(item => {
  		if (item.id.toString() === curItemId) {
  			this.curItem = item;
  		}
  	});  	
  }

}
