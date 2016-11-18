"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var core_1 = require('@angular/core');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._url = "http://jsonplaceholder.typicode.com/users";
        //private usersUrl = 'app/user';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this._url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    UserService.prototype.add = function (value) {
        return this._http
            .post(this._url, JSON.stringify({ name: value.user.name, email: value.user.email,
            phone: value.user.phone, street: value.address.street, suite: value.address.suite,
            city: value.address.city, zipCode: value.address.zipCode }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map