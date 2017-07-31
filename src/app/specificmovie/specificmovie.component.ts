import { Component, OnInit } from '@angular/core';
import { SpecificMovieService } from './specificmovie.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-specificmovie',
	templateUrl: './specificmovie.component.html',
	styleUrls: ['./specificmovie.component.css'],
	providers: [SpecificMovieService]
})
export class SpecificmovieComponent implements OnInit {

	movie:any;
	flag=0;
	constructor(private movieservice: SpecificMovieService,
		private router: Router,
		private activeroute: ActivatedRoute) { }

	ngOnInit() {


		let movieid=  this.activeroute.snapshot.params['movieid'];
		this.movieservice.getSpecificMovie(movieid).subscribe((movieDetails)=>{

			this.movie=movieDetails;
			console.log('from specific movie',this.movie);
			this.flag=1;
		});
	}
	similarmovies(movieid){

       console.log('Got Movie Id in specificmovie on search.component.ts ',movieid);

       this.router.navigate([`search/similar/${movieid}`]);

   }

}
