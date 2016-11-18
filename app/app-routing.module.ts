import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UserComponent} from './user.component';
import {PostComponent} from './post.component';
import {HomeComponent} from './home.component';
import {AddUserComponent} from './add-user.component';


const routes : Routes = [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'post',
                component: PostComponent
            },
            {
                path: 'user/new',
                component: AddUserComponent
            },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
