import { Component, OnInit } from '@angular/core';
import { SimilarMoviesService } from './similarmovies.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
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

  constructor(private movieservice: SimilarMoviesService,
		private router: Router,
		private activeroute: ActivatedRoute) { }

  ngOnInit() {
  	let movieid=  this.activeroute.snapshot.params['movieid'];
		this.movieservice.getSimilarMovies(movieid).subscribe((movieDetails)=>{
			this.arr=(movieDetails.results);
			console.log('from similar movie arr',this.arr[0]);
/*			this.movie(movieDetails);
			console.log('from similar movie',this.movie);*/
			this.flag=1;
		});
  }

}
