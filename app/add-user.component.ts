import {Component, OnInit, Output} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user'

@Component({
    selector: 'add-user',
    templateUrl: 'app/add-user.component.html'
})
export class AddUserComponent{

    users: User[] = [];

     constructor(private _userService: UserService){}

     onSubmit({ value }: { value: User }){
         console.log(value)
         console.log(value)
         console.log(value.address)

         this._userService.add(value)
                .then( user => {
                    this.users.push(user)
                })
        console.log(this.users);
     }

}