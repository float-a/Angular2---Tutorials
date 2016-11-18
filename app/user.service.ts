import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import {Injectable} from '@angular/core';

import {User} from './user';

@Injectable()
export class UserService {
    private _url = "http://jsonplaceholder.typicode.com/users";

    //private usersUrl = 'app/user';

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private _http: Http){}

    getUsers(): Promise<User[]> {
       return this._http.get(this._url)
            .toPromise()
            .then(res => res.json())
    }

    add(value): Promise<User> {
        return this._http
            .post(this._url, JSON.stringify({name: value.user.name, email: value.user.email, 
                phone: value.user.phone, street: value.address.street, suite: value.address.suite,
                 city: value.address.city, zipCode: value.address.zipCode }), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
    }
}