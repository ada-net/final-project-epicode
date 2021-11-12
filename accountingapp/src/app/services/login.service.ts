import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  login(username: string, password: string) {
    if (username === "admin" && password === "111111") {
      return true;
    }
    else return false;

  }

  /*
    private loginUrl = "http://localhost:4200/login";
  
    constructor(private http: HttpClient) { }
  
    loginUser(user: any){
      return this.http.post<any>(this.loginUrl, user)
    }*/


}
