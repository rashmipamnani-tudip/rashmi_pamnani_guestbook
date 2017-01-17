import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import {LoginComponent} from 'app/Login/login.component'
import { AppComponent } from './app.component'
import {RegisterComponent} from 'app/Register/register.component'
import {User} from 'app/Login/loguser.interface'
import {RouterModule} from '@angular/router'
import {signupRoutes} from 'app/Routing/routing'
import {dashComponent} from 'app/Dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    dashComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(signupRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
