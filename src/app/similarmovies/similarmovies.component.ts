import { Component, OnInit } from '@angular/core';
import { SimilarMoviesService } from './similarmovies.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { Route} from '@angular/router';
@Component({
  selector: 'app-similarmovies',
  templateUrl: './similarmovies.component.html',
  styleUrls: ['./similarmovies.component.css'],
  providers:[SimilarMoviesService]
})
export class SimilarmoviesComponent implements OnInit {

	movie:any;
	flag=0;
	arr=[];
	page: number;
	total_pages:number;
  constructor(private movieservice: SimilarMoviesService,
		private router: Router,
		private activeroute: ActivatedRoute) { }

  ngOnInit() {
  	this.page = 1;
  	let movieid=  this.activeroute.snapshot.params['movieid'];
		this.movieservice.getSimilarMovies(movieid).subscribe((movieDetails)=>{
			this.total_pages=movieDetails.total_pages;
			this.arr=(movieDetails.results);
			console.log('from similar movie arr',this.arr[0]);
/*			this.movie(movieDetails);
			console.log('from similar movie',this.movie);*/
			this.flag=1;
		});
  }
 /* onScroll() {
   	if(this.page <= this.total_pages){
        		console.log("from onscroll",this.moviename)
        		
            return this.movieservice.getSimilarMovies(this.moviename, ++this.pager).subscribe(data => {
                  
                    data.results.forEach((d)=>{this.arr.push(d)})
                
            });
          }
        

    }*/
    specificmovie(movieid){

       console.log('Got Movie Id in specificmovie on search.component.ts ',movieid);

       this.router.navigate([`search/${movieid}`]);

   }
  

}
