import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

}
