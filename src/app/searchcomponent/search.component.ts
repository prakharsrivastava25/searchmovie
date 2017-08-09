import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MoviesService} from '../movies.service';
import {Http, Response} from '@angular/http';
import { Route, Router} from '@angular/router';
//import {ViewSearch} from './viewsearch.component';
@Component({
    selector: 'root',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
	arr=[];
	arr2=[];
	pager: number;
	moviename: string;
	moviedata: any;
	total_pages:number;
	total_results:number;
	signal = false;
		constructor(private obj:MoviesService,private route:Router/*,private views:ViewSearch*/){}
		
		searchmovie(movie){
			this.pager = 1;
			this.moviename=movie;
			console.log('movie name from search component', movie);
			this.obj.getMovies(movie,this.pager).subscribe((data)=>{this.arr=[];
				console.log("data.results length is",data.results.length);
				console.log("data.results is",data.results);
				console.log("data.total_pages is",data.total_pages);
				this.total_pages=data.total_pages;
				this.total_results=data.total_results;
				// data.results.forEach((d)=>{
				// 	this.arr.push(d);
				// })
				// this.arr.push(data.results);
				this.arr=data.results;
				console.log('result is ',this.arr);
			//	this.views.movieloaded();
			//console.log("array length",this.arr.length);
				//console.log("array",this.arr[0]);
//				this.route.navigate(['view']);//pathview
				if(this.arr.length>0){
					this.signal=true;
				}
			}

				)
		}
// 		specificmovie(movieid){
// 			console.log('movieid received', movieid);
// 			this.obj.getMovie(movieid).subscribe((data)=>{this.arr2=[];
// 				console.log("data from specificmovie length is",data);
// 				this.arr2.push(data);
// 			//	this.views.movieloaded();
// 			console.log("array2 length",this.arr2.length);
// 				console.log("array2",this.arr2[0]);
// //				this.route.navigate(['view']);//pathview
// 			}

// 				)
// 		}

   specificmovie(movieid){

       console.log('Got Movie Id in specificmovie on search.component.ts ',movieid);

       this.route.navigate([`search/${movieid}`]);

   }
   onScroll() {
   	if(this.pager <= this.total_pages){
        		console.log("from onscroll",this.moviename)
        		/*this.arr=[];*/
            return this.obj.getMovies(this.moviename, ++this.pager).subscribe(data => {
                    /*this.arr.push(data.results);*/
                    data.results.forEach((d)=>{this.arr.push(d)})
                
            });
          }
        

    }
		
	}