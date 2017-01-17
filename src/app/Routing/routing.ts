import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from 'app/Login/login.component';
import {RegisterComponent} from 'app/Register/register.component'
import {dashComponent} from 'app/Dashboard/dashboard.component'
export const signupRoutes = [
   
    {path: 'signup', component: RegisterComponent},
    {path: 'dashboard', component: dashComponent},
     {path: '',component: LoginComponent}
]