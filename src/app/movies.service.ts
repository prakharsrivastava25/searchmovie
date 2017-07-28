import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
    result: any[];

    constructor(private http: Http) { };

    getMovies (movie,pager) {
    		console.log("movie name received in movies.service.ts is",movie);
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=ecdf484e477ffdadf385fb7ae282d079&language=en-US&query='+movie+'&page='+pager;
        console.log("URL is ",url);
        return this.http.get(url).map(res => res.json());
    }

    getMovie (movieid) {
    		console.log("movie name received in movies.service.ts is",movieid);
        const movieurl = 'https://api.themoviedb.org/3/movie/'+movieid+'?api_key=ecdf484e477ffdadf385fb7ae282d079&language=en-US';
        console.log("specific movie URL is ",movieurl);
        return this.http.get(movieurl).map(res => res.json());
    }
}
