import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators}from '@angular/forms';
import {User} from 'app/Login/loguser.interface';

@Component({
  moduleId:" module.id",
  selector: 'login-form',
  templateUrl: 'app/Login/login.component.html'
  })

  export class LoginComponent implements OnInit{

loginForm: FormGroup;
fb: FormBuilder;
constructor(private formBuilder: FormBuilder) {}

 ngOnInit() {
       this.loginForm = this.formBuilder.group({
            email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            password: ['', [<any>Validators.required,<any>Validators.minLength(6)]]
            });
    } 
  }