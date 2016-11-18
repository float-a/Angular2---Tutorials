import './rxjs-extensions';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

//We don't have a web server that can handle requests for heroes. Until we do, we'll have to fake it.
//We're going to trick the HTTP client into fetching and saving data from a mock service, the in-memory web API.
//Remember, the in-memory web API is only useful in the early stages of development and for demonstrations

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service'; 

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroSearchComponent} from './hero-search.component';

import {HeroService} from './hero.service'

import {AppRoutingModule} from './app-routing.module'

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],

    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    
    providers:[
        HeroService
    ],

    bootstrap: [
        AppComponent
    ]

})
export class AppModule {}