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
var core_1 = require('@angular/core');
var user_service_1 = require('./user.service');
var AddUserComponent = (function () {
    function AddUserComponent(_userService) {
        this._userService = _userService;
        this.users = [];
    }
    AddUserComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value;
        console.log(value);
        console.log(value);
        console.log(value.address);
        this._userService.add(value)
            .then(function (user) {
            _this.users.push(user);
        });
        console.log(this.users);
    };
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'add-user',
            templateUrl: 'app/add-user.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add-user.component.js.map