import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "url here";

  constructor(private httpClient: HttpClient){}

  // Login
  doLogin(value) {
    const credentials = { email: value.email, password: value.password};
    console.log(credentials);
    return new Promise<any>((resolve, reject) => {
      this.httpClient.post(`url`, credentials)
      .subscribe(data  => {
        console.log("POST Request is successful ", data);
      }, err => reject(err))
    })
  }

  // Register
  doRegister(value) {
    const credentials = { email: value.email, password: value.password};
    return new Promise<any>((resolve, reject) => {
      this.httpClient.post(`url`, credentials)
      .subscribe(data  => {
        console.log("POST Request is successful ", data);
      }, err => reject(err))
    })
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail) {
    console.log("forgot password");
  }

  // Logout
  doLogout() {
    console.log("Logged out");
  }
}