import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoviesService } from './movies.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboardcomponent/dashboard.component';
import { SearchComponent } from './searchcomponent/search.component';
import { SpecificMovieComponent } from './selectedmovie.component';
//import {ViewSearch} from './viewsearch.component';
import 'hammerjs';
import { SpecificmovieComponent } from './specificmovie/specificmovie.component';



@NgModule({
  declarations: [
    AppComponent, DashboardComponent, SearchComponent, SpecificMovieComponent, SpecificmovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InfiniteScrollModule,
    MaterialModule,
    FlexLayoutModule,
 //   InfiniteScrollModule,
    RouterModule.forRoot([
          {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
          },
          {
              path: 'dashboard/search',
              component: SearchComponent
          },
          {
              path: 'dashboard',
              component: DashboardComponent
          },{
              path: 'search/:movieid',
              component: SpecificmovieComponent
          }
      ])  
  ],
  providers: [MoviesService,SearchComponent,SpecificMovieComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
