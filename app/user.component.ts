import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user'

@Component({
    selector: 'user',
    templateUrl: 'app/user.component.html'
})
export class UserComponent implements OnInit{

    users: User[];

     constructor(private _userService: UserService){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(): void {
    this._userService.getUsers().then(users => {
      this.users = users;  
      console.log(this.users)}
      )
    
  }
}