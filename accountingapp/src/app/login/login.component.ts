import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  form: FormGroup;

  constructor(fb: FormBuilder, private _loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    var result = this._loginService.login(this.form.controls['username'].value,
      this.form.controls['password'].value);

    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    }
  }




  /*
  loginData = {};
  constructor(private authentication: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.authentication.loginUser(this.loginData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
   
  
  
  }
*/


}
