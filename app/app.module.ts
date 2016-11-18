
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent }   from './app.component';
import {UserComponent} from './user.component';
import {PostComponent} from './post.component';
import {HomeComponent} from './home.component';
import {NavBarComponent} from './navbar.component';
import {UserService} from './user.service';
import {AddUserComponent} from './add-user.component'

import {AppRoutingModule} from './app-routing.module'

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule 
    ],
  declarations: [ 
    AppComponent, 
    NavBarComponent,
    HomeComponent,
    UserComponent,
    PostComponent,
    AddUserComponent 
    ],
    providers:[
        UserService
    ],
  bootstrap:    [ 
    AppComponent 
    ]
})
export class AppModule { }
