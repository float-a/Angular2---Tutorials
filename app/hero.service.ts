import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Hero} from './hero'

@Injectable()
export class HeroService{

    private heroesUrl = 'app/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private _http: Http){}

   getHero(id: number): Promise<Hero>{
        return this.getHeroes()
                        .then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroes(): Promise<Hero[]> {

        return this._http.get(this.heroesUrl) 
// get returns an Observable, 
//and we need to convert it to Promise for now
                        .toPromise()
//Pay close attention to the shape of the data returned by the server. 
//This particular in-memory web API example happens to return an object with a data property. 
//Your API might return something else. Adjust the code to match your web API.
                        .then(response => response.json().data as Hero[])
//This is a critical step! We must anticipate HTTP failures as they happen frequently for reasons beyond our control.
                        .catch(this.handleError);
                        
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occured', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this._http.put(url, JSON.stringify(hero), {headers: this.headers})
                    .toPromise()
                    .then(() => hero)
                    .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this._http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
       return this._http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

  

    


    // getHeroes(): Promise<Hero[]>{
    //     return Promise.resolve(HEROES);
    // }

    // getHeroesSlowly(): Promise<Hero[]> {
    //     return new Promise<Hero[]>(resolve =>
    //         setTimeout(resolve, 2000)) // delay 2 seconds
    //         .then(() => this.getHeroes());
    // }
}