import { Component, OnInit } from '@angular/core';

import { exampleData } from '../example-data'

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
	data = exampleData

	constructor() { }	

  ngOnInit() {  	

  }

}
