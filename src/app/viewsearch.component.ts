import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Http, Response} from '@angular/http';
import {SearchComponent} from './searchcomponent/search.component';
@Component({
    selector: 'listsearch',
    templateUrl: './viewsearch.component.html',
    styleUrls: ['./viewsearch.component.css']
})
export class ViewSearch {
	constructor(private moviearr:SearchComponent){}
	movieloaded(){console.log("-->",this.moviearr.arr);}

			}
