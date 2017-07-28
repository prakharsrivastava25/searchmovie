import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class SpecificMovieService {

constructor(private http: Http){}


   getSpecificMovie (movieid) {
    		console.log("movie name received in movies.service.ts is",movieid);
        const movieurl = 'https://api.themoviedb.org/3/movie/'+movieid+'?api_key=ecdf484e477ffdadf385fb7ae282d079&language=en-US';
        console.log("specific movie URL is ",movieurl);
        return this.http.get(movieurl).map(res => res.json());
    }
}