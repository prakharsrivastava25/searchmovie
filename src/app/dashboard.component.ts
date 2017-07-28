import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MoviesService} from './movies.service';
import {Http, Response} from '@angular/http';
@Component({
    selector: 'app-dash-board',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	}