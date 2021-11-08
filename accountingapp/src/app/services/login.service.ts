import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loginUrl = "http://localhost:4200/login";

  constructor(private http: HttpClient) { }

  loginUser(user: any){
    return this.http.post<any>(this.loginUrl, user)
  }
}
