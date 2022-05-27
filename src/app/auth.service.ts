import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }
  user:AuthData
  private ordersUrl = 'api/orders/'
  createUseer(email:string,password:string) {
    return this.http.post<AuthData>(this.ordersUrl + "/signup/", {email,password}).subscribe((user)=> {
      console.log(user);
      
    })
  }

  logIn(email:string, password:string) {
    
  }
}
