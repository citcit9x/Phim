import {UsersComponent} from './users/users.component';
import { Routes, RouterModule } from '@angular/router';

 
const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    }
];

export const appRouterModule = RouterModule.forRoot(routes);