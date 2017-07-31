import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class SimilarMoviesService {

constructor(private http: Http){}


   getSimilarMovies (movieid) {
    		console.log("movie name received in similar movie.service.ts is",movieid);
        const movieurl = 'https://api.themoviedb.org/3/movie/'+movieid+'/similar?api_key=ecdf484e477ffdadf385fb7ae282d079&language=en-US&page=1';
        console.log("similar movie URL is ",movieurl);
        return this.http.get(movieurl).map(res => res.json());
    }
}