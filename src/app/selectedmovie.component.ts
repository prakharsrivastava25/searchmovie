import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MoviesService} from './movies.service';
import {Http, Response} from '@angular/http';
import { SearchComponent } from './searchcomponent/search.component'
@Component({
    selector: 'selectedmovie',
    templateUrl: './selectedmovie.component.html',
    styleUrls: ['./selectedmovie.component.css']
})
export class SpecificMovieComponent {
	
	}