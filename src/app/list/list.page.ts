import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { exampleData } from '../example-data'

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
	data = exampleData
	filterInput: string;
	curFilterText: string;

	constructor(private activatedRoute: ActivatedRoute, private router: Router) { }	

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		if (params["filtertext"]) {
  			this.filterInput = params["filtertext"];
  			this.filterList(params["filtertext"]);
  		}  		
  	})
  }

  filterList(filtertext: string) {
  	console.log("Filter by '" + filtertext) + "'";
  	this.curFilterText = filtertext;
  	this.data = this.data.filter(item => item.id!==2 && item.id!==5); // Only dummy filtering  	
  }

  filterButtonClick() {
  	if (this.filterInput) {
  		this.router.navigateByUrl("/list/filtered/" + this.filterInput, { replaceUrl: true });	
  	}
  }

  openDetails(item) {
  	this.router.navigateByUrl("/detail/" + item.id);
  }

}
