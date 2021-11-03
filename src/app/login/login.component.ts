import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errors:string='';

  loginForm:FormGroup = new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z1-9]{3,8}$')]),
  });
  submitLoginForm(loginForm:FormGroup ){
    if(loginForm.valid){
      this._AuthService.login(loginForm.value).subscribe((response)=>{
        if(response.message == 'success'){
          localStorage.setItem('userToken',response.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['home']);
        }
        else{
          this.errors = response.errors.email.message;
        };
      });
    };
  };
  constructor(public _AuthService:AuthService ,public _Router:Router) { };
  ngOnInit(): void {
  }

}
