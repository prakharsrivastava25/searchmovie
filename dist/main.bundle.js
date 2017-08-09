webpackJsonp([1,4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = (function () {
    function MoviesService(http) {
        this.http = http;
    }
    ;
    MoviesService.prototype.getMovies = function (movie, pager) {
        console.log("movie name received in movies.service.ts is", movie);
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=ecdf484e477ffdadf385fb7ae282d079&language=en-US&query=' + movie + '&page=' + pager;
        console.log("URL is ", url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getMovie = function (movieid) {
        console.log("movie name received in movies.service.ts is", movieid);
        var movieurl = 'https://api.themoviedb.org/3/movie/' + movieid + '?api_key=ecdf484e477ffdadf385fb7ae282d079&language=en-US';
        console.log("specific movie URL is ", movieurl);
        return this.http.get(movieurl).map(function (res) { return res.json(); });
    };
    return MoviesService;
}());
MoviesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], MoviesService);

var _a;
//# sourceMappingURL=movies.service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 129;


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(228),
        styles: [__webpack_require__(221)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movies_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboardcomponent_dashboard_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__searchcomponent_search_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__specificmovie_specificmovie_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__similarmovies_similarmovies_component__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { SpecificMovieComponent } from './selectedmovie.component';
//import {ViewSearch} from './viewsearch.component';



//import { SimilarMoviesComponent } from './similarmovies/similarmovies.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_10__dashboardcomponent_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_11__searchcomponent_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_14__specificmovie_specificmovie_component__["a" /* SpecificmovieComponent */], __WEBPACK_IMPORTED_MODULE_15__similarmovies_similarmovies_component__["a" /* SimilarmoviesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            //   InfiniteScrollModule,
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard/search',
                    component: __WEBPACK_IMPORTED_MODULE_11__searchcomponent_search_component__["a" /* SearchComponent */]
                },
                {
                    path: 'dashboard',
                    component: __WEBPACK_IMPORTED_MODULE_10__dashboardcomponent_dashboard_component__["a" /* DashboardComponent */]
                }, {
                    path: 'search/:movieid',
                    component: __WEBPACK_IMPORTED_MODULE_14__specificmovie_specificmovie_component__["a" /* SpecificmovieComponent */]
                }, {
                    path: 'search/similar/:movieid',
                    component: __WEBPACK_IMPORTED_MODULE_15__similarmovies_similarmovies_component__["a" /* SimilarmoviesComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__movies_service__["a" /* MoviesService */], __WEBPACK_IMPORTED_MODULE_11__searchcomponent_search_component__["a" /* SearchComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-dash-board',
        template: __webpack_require__(229),
        styles: [__webpack_require__(222)]
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {ViewSearch} from './viewsearch.component';
var SearchComponent = (function () {
    function SearchComponent(obj, route /*,private views:ViewSearch*/) {
        this.obj = obj;
        this.route = route; /*,private views:ViewSearch*/
        this.arr = [];
        this.arr2 = [];
        this.signal = false;
    }
    SearchComponent.prototype.searchmovie = function (movie) {
        var _this = this;
        this.pager = 1;
        this.moviename = movie;
        console.log('movie name from search component', movie);
        this.obj.getMovies(movie, this.pager).subscribe(function (data) {
            _this.arr = [];
            console.log("data.results length is", data.results.length);
            console.log("data.results is", data.results);
            console.log("data.total_pages is", data.total_pages);
            _this.total_pages = data.total_pages;
            _this.total_results = data.total_results;
            // data.results.forEach((d)=>{
            // 	this.arr.push(d);
            // })
            // this.arr.push(data.results);
            _this.arr = data.results;
            console.log('result is ', _this.arr);
            //	this.views.movieloaded();
            //console.log("array length",this.arr.length);
            //console.log("array",this.arr[0]);
            //				this.route.navigate(['view']);//pathview
            if (_this.arr.length > 0) {
                _this.signal = true;
            }
        });
    };
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
    SearchComponent.prototype.specificmovie = function (movieid) {
        console.log('Got Movie Id in specificmovie on search.component.ts ', movieid);
        this.route.navigate(["search/" + movieid]);
    };
    SearchComponent.prototype.onScroll = function () {
        var _this = this;
        if (this.pager <= this.total_pages) {
            console.log("from onscroll", this.moviename);
            /*this.arr=[];*/
            return this.obj.getMovies(this.moviename, ++this.pager).subscribe(function (data) {
                /*this.arr.push(data.results);*/
                data.results.forEach(function (d) { _this.arr.push(d); });
            });
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'root',
        template: __webpack_require__(230),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__movies_service__["a" /* MoviesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__movies_service__["a" /* MoviesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] /*,private views:ViewSearch*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] /*,private views:ViewSearch*/) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__similarmovies_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimilarmoviesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimilarmoviesComponent = (function () {
    function SimilarmoviesComponent(movieservice, router, activeroute) {
        this.movieservice = movieservice;
        this.router = router;
        this.activeroute = activeroute;
        this.flag = 0;
        this.arr = [];
        this.signal = false;
    }
    SimilarmoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        var movieid = this.activeroute.snapshot.params['movieid'];
        this.id_movie = movieid;
        this.movieservice.getSimilarMovies(movieid, this.page).subscribe(function (movieDetails) {
            _this.total_pages = movieDetails.total_pages;
            _this.arr = (movieDetails.results);
            _this.total_results = movieDetails.total_results;
            console.log('from similar movie arr', _this.arr[0]);
            /*			this.movie(movieDetails);
                        console.log('from similar movie',this.movie);*/
            _this.flag = 1;
            if (_this.arr.length > 0) {
                _this.signal = true;
            }
        });
    };
    SimilarmoviesComponent.prototype.onScroll = function () {
        var _this = this;
        if (this.page <= this.total_pages) {
            //console.log("from onscroll",this.moviename)
            return this.movieservice.getSimilarMovies(this.id_movie, ++this.page).subscribe(function (data) {
                data.results.forEach(function (d) { _this.arr.push(d); });
            });
        }
    };
    SimilarmoviesComponent.prototype.specificmovie = function (movieid) {
        console.log('Got Movie Id in specificmovie on search.component.ts ', movieid);
        this.router.navigate(["search/" + movieid]);
    };
    return SimilarmoviesComponent;
}());
SimilarmoviesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-similarmovies',
        template: __webpack_require__(231),
        styles: [__webpack_require__(224)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__similarmovies_service__["a" /* SimilarMoviesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__similarmovies_service__["a" /* SimilarMoviesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__similarmovies_service__["a" /* SimilarMoviesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], SimilarmoviesComponent);

var _a, _b, _c;
//# sourceMappingURL=similarmovies.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimilarMoviesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimilarMoviesService = (function () {
    function SimilarMoviesService(http) {
        this.http = http;
    }
    SimilarMoviesService.prototype.getSimilarMovies = function (movieid, page) {
        console.log("movie name received in similar movie.service.ts is", movieid);
        var movieurl = 'https://api.themoviedb.org/3/movie/' + movieid + '/similar?api_key=ecdf484e477ffdadf385fb7ae282d079&language=en-US&page=' + page;
        console.log("similar movie URL is ", movieurl);
        return this.http.get(movieurl).map(function (res) { return res.json(); });
    };
    return SimilarMoviesService;
}());
SimilarMoviesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SimilarMoviesService);

var _a;
//# sourceMappingURL=similarmovies.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__specificmovie_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificmovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpecificmovieComponent = (function () {
    function SpecificmovieComponent(movieservice, router, activeroute) {
        this.movieservice = movieservice;
        this.router = router;
        this.activeroute = activeroute;
        this.flag = 0;
    }
    SpecificmovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        var movieid = this.activeroute.snapshot.params['movieid'];
        this.movieservice.getSpecificMovie(movieid).subscribe(function (movieDetails) {
            _this.movie = movieDetails;
            console.log('from specific movie', _this.movie);
            _this.flag = 1;
        });
    };
    SpecificmovieComponent.prototype.similarmovies = function (movieid) {
        console.log('Got Movie Id in specificmovie on search.component.ts ', movieid);
        this.router.navigate(["search/similar/" + movieid]);
    };
    return SpecificmovieComponent;
}());
SpecificmovieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-specificmovie',
        template: __webpack_require__(232),
        styles: [__webpack_require__(225)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__specificmovie_service__["a" /* SpecificMovieService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__specificmovie_service__["a" /* SpecificMovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__specificmovie_service__["a" /* SpecificMovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], SpecificmovieComponent);

var _a, _b, _c;
//# sourceMappingURL=specificmovie.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificMovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecificMovieService = (function () {
    function SpecificMovieService(http) {
        this.http = http;
    }
    SpecificMovieService.prototype.getSpecificMovie = function (movieid) {
        console.log("movie name received in movies.service.ts is", movieid);
        var movieurl = 'https://api.themoviedb.org/3/movie/' + movieid + '?api_key=ecdf484e477ffdadf385fb7ae282d079&language=en-US';
        console.log("specific movie URL is ", movieurl);
        return this.http.get(movieurl).map(function (res) { return res.json(); });
    };
    return SpecificMovieService;
}());
SpecificMovieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SpecificMovieService);

var _a;
//# sourceMappingURL=specificmovie.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "/*nav {\n  position: absolute;\n  right: 50px;\n}\n\na {\n  color: orange;\n}\n\n#main {\n  background-color: #673AB7;\n}\n*/\na{\n\ttext-decoration:none;\n  font-family: Roboto, sans-serif;\n  color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "/*#cover{\n\tbackground-color: #FF80AB\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "#searchblock {\n  text-align: center;\n  background-image: url(\"https://image.freepik.com/free-vector/nature-background-of-a-grassy-landscape_1048-1305.jpg\");\n}\n\nbackground-image {\n  opacity: 0.5;\n}\n/*.results\n{\n\tbackground-image: url(\"https://ak3.picdn.net/shutterstock/videos/12448901/thumb/1.jpg\");\n}\n.card{\n\tbackground-image: \"none\";\n}\n*/\n\n/*img{\n\tmax-height: 75%;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "#genre{\n\tdisplay: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"main\">\n  <nav>\n    <a class=\"btn btn-primary\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Homepage</a>\n    <a class=\"btn btn-primary\" routerLink=\"/dashboard/search\" routerLinkActive=\"active\">Search<md-icon>search</md-icon></a>\n  </nav>\n  <h1>Welcome</h1>\n</div> -->\n<md-toolbar color=\"primary\">\n  <nav><a class=\"btn btn-primary\" routerLink=\"/dashboard\" routerLinkActive=\"active\" fxFlex=\"75%\" fxLayoutAlign=\"start center\">Homepage</a></nav>\n  <span>Movie Encyclopedia</span>\n  <span>\n\n <nav>\n  <a class=\"btn btn-primary\" routerLink=\"/dashboard/search\" routerLinkActive=\"active\" fxFlex=\"60%\"> Search<md-icon fxFlex=\"20%\" fxLayoutGap=\"2%\">search</md-icon></a>\n</nav>\n\n\n  </span>\n</md-toolbar>\n\n\n<router-outlet></router-outlet>\n\n<!-- <nav md-tab-nav-bar>\n    <a md-tab-link routerLink=\"/dashboard\" routerLinkActive=\"active\">Homepage</a>\n    <a md-tab-link routerLink=\"/dashboard/search\" routerLinkActive=\"active\">Search</a>\n  </nav>\n  <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-content>\n    <img md-card-image src=\"./../../assets/dashboard.jpg\">\n  </md-card-content>\n</md-card>\n<!-- Dashboard Component -->\n<!-- <app-dash-board> -->\n<!-- <div id=\"cover\">\n  <h1>Dashboard Component</h1>\n</div> -->\n<!-- </app-dash-board> -->\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<!-- <root> -->\n<div>\n<!--   <div id=\"searchblock\">\n    <h1>Search Movie</h1>\n    <input placeholder=\"Enter Movie Name Here\" type=\"text\" [(ngModel)]=\"name\" />\n    <button (click)='searchmovie(name)'>Search</button>\n    <p>you are typing this in search bar: {{name}}</p>\n  </div> -->\n<md-card fxLayoutAlign=\"center\">\n  <div fxFlex=\"30%\"   >\n    <md-input-container fxFlex=\"60%\" fxLayoutAlign=\"start\" >\n      <input mdInput placeholder=\"Enter Movie Name Here\"  dividerColor=\"accent\" [(ngModel)]=\"name\" (keyup.enter)='searchmovie(name)' />\n    </md-input-container>\n    <div fxFlex=\"20%\" fxLayoutAlign=\"start center\">\n      <button md-mini-fab color=\"primary\"  (click)='searchmovie(name) '>\n        <md-icon>send</md-icon>\n      </button>\n    </div>\n  </div>  \n\n</md-card>\n<!-- Signal value:{{signal}}\n<div *ngIf=\"signal\" >\n  Hello got inside div\n</div> -->\n<div *ngIf=\"signal\" >\n  <div fxLayoutAlign=\"center\">\n    Total Results Found:{{total_results}}\n  </div>\n</div>\n\n  <div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"30px\" infiniteScroll [infiniteScrollDistance]=\"1\" [infiniteScrollThrottle]=\"400\" (scrolled)=\"onScroll()\" class=\"results\">\n    <div *ngIf=\"arr.length>0\">\n      <div fxFlex=\"96%\" fxLayoutGap=\"2%\" fx-flex-fill fxLayoutWrap>\n        <!-- <md-card> -->\n        <div fxFlex=\"31%\" fx-flex-fill *ngFor='let movie of arr'>\n          <md-card class=\"card\">\n            <md-card-content>\n              <img md-card-image [src]=\"'http://image.tmdb.org/t/p/w500'+movie.poster_path\" alt='image not found'>\n              <p md-line>Title: {{movie.title}}</p>\n              <p md-line>Overview: {{movie.overview}}</p>\n              <p md-line>Rating: {{movie.vote_average}}</p>\n              <p md-line>Release Date: {{movie.release_date}}</p>\n              <button md-raised-button (click)=\"specificmovie(movie.id)\">Movie Details</button>\n            </md-card-content>\n          </md-card>\n        </div>\n        <!-- </md-card> -->\n      </div>\n    </div>\n    <!-- <div *ngIf=\"movie.total_results===0\" >\n      <p>No Result Found</p>\n    </div> -->\n  </div>\n  <!-- <div *ngIf=\"this.arr > 0\"> -->\n  <!-- <ul *ngFor=\"let movie of this.arr\">\n  <li>{{movie.page}}</li>\n</u -->\n  <!-- l> -->\n  <!-- </div> -->\n  <!-- <div *ngFor='let movies of this.arr'>\n<ul *ngFor='let movie of movies'>\n<li>{{movie.title}}</li>\n</ul>\n</div> -->\n  <!-- <ul>\n  <li>hellooln</li>\n </ul> -->\n  <!-- <md-card fxFlex=\"55%\" class=\"parent card\"> -->\n  <!-- <div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"center\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\" *ngIf='this.arr.length>0'>\n    <h2 class=\"title\">Movies</h2>\n    <hr/>\n    <br>\n    <br>\n    <md-card-content>\n      <md-list>\n        <md-list-item *ngFor='let movies of this.arr'>\n          <md-list-item *ngFor='let movie of movies'>\n            <md-card>\n              <md-card-content>\n                <img [src]=\"'http://image.tmdb.org/t/p/w300'+movie.poster_path\" />\n                <p md-line>Title: {{movie.title}}</p>\n                <p md-line>Overview: {{movie.overview}}</p>\n                <p md-line>Rating: {{movie.vote_average}}</p>\n                <p md-line>Release Date: {{movie.release_date}}</p>\n                <button md-raised-button (click)=\"specificmovie(movie.id)\">Movie Details</button>\n              </md-card-content>\n            </md-card>\n          </md-list-item>\n        </md-list-item>\n      </md-list>\n    </md-card-content>\n  </div> -->\n  <!-- </md-card> -->\n  <!-- <div *ngIf='this.arr2.length>0' fxLayout=\"column\">\n    <h2 class=\"title\">Specific Movie Details</h2>\n    <hr/>\n    <br>\n    <br>\n    <md-card-content>\n      <md-list>\n        <md-list-item *ngFor='let movie of this.arr2'>\n          \n            <md-card >\n              <md-card-content>\n                <p md-line>Tile: {{movie.original_title}}</p>\n                <p md-line>Budget: {{movie.budget}}</p>\n                <ul *ngFor='let genre of movie.genres'>\n                  <li>{{genre.name}}</li>\n                </ul>\n                <p md-line>Votes: {{movie.vote_count}}</p>\n                <p md-line>Status: {{movie.status}}</p>\n              </md-card-content>\n            </md-card>\n          \n        </md-list-item>\n      </md-list>\n    </md-card-content>\n  </div> -->\n  <!-- </root> -->\n</div>\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center\">\n    Total Results Found:{{total_results}}\n  </div>\n<div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"30px\" infiniteScroll [infiniteScrollDistance]=\"1\" [infiniteScrollThrottle]=\"400\" (scrolled)=\"onScroll()\">\n  <!-- <div *ngIf=\"this.arr.length!=0\"> -->\n  <div fxFlex=\"96%\" fxLayoutGap=\"2%\" fx-flex-fill fxLayoutWrap>\n    <div fxFlex=\"31%\" fx-flex-fill *ngFor='let movie of this.arr'>\n      <md-card>\n        <md-card-content>\n          <img md-card-image [src]=\"'http://image.tmdb.org/t/p/w500'+movie.poster_path\" alt='http://www.ecreativeim.com/blog/wp-content/uploads/2011/05/image-not-found.jpg'>\n          <p md-line>Title: {{movie.title}}</p>\n          <p md-line>Overview: {{movie.overview}}</p>\n          <p md-line>Rating: {{movie.vote_average}}</p>\n          <p md-line>Release Date: {{movie.release_date}}</p>\n          <button md-raised-button (click)=\"specificmovie(movie.id)\">Movie Details</button>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"30px\">\n  <div fxFlex=\"96%\" fxLayoutGap=\"2%\" fxLayoutWrap *ngIf='flag===1'>\n    <div fxFlex=\"100%\" fx-flex-fill>\n      <md-card>\n        <md-card-content>\n          <img [src]=\"'http://image.tmdb.org/t/p/w300'+movie.poster_path\" />\n          <p md-line>Title: {{movie.original_title}}</p>\n          <p md-line>Budget: {{movie.budget}}</p>\n          <p md-line>Genres:</p>\n          <ul *ngFor='let genre of movie.genres' id=\"genre\">\n            <li>{{genre.name}}</li>\n          </ul>\n          <p md-line>Votes: {{movie.vote_count}}</p>\n          <p md-line>Status: {{movie.status}}</p>\n          <button md-raised-button (click)=\"similarmovies(movie.id)\">Similar Movies</button>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n<!-- <app-specificmovie> -->\n<!--   <div *ngIf='flag===1' >\n    <h2 class=\"title\">Specific Movie Details</h2>\n    <hr/>\n    <md-card-content>\n      <md-list>\n        <md-list-item>\n          <md-card>\n            <md-card-content>\n              <img [src]=\"'http://image.tmdb.org/t/p/w300'+movie.poster_path\" />\n              <p md-line>Tile: {{movie.original_title}}</p>\n              <p md-line>Budget: {{movie.budget}}</p>\n              <p md-line>Genres:</p>\n              <ul *ngFor='let genre of movie.genres'>\n                <li>{{genre.name}}</li>\n              </ul>\n              <p md-line>Votes: {{movie.vote_count}}</p>\n              <p md-line>Status: {{movie.status}}</p>\n            </md-card-content>\n          </md-card>\n        </md-list-item>\n      </md-list>\n    </md-card-content>\n  </div> -->\n<!-- </app-specificmovie> -->\n"

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ })

},[273]);
//# sourceMappingURL=main.bundle.js.map