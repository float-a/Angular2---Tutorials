import { Component, OnInit } from '@angular/core';
import {NavBarComponent} from './navbar.component';


@Component({
  selector: 'my-app',
  template: `
  <navbar></navbar>

  <router-outlet></router-outlet>
  
  `
})
export class AppComponent{ 

 
}
