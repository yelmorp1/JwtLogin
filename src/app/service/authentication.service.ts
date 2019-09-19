import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class User {
  constructor(
    public status: string,
  ) { }

}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  url:string = "localhost:8080/";


  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(username, password) {
    console.log("url: " + this.url +'authenticate');
    console.log("password: " + password);
    return this.httpClient.post<any>("http://localhost:8080/authenticate",{username,password}).subscribe
    ( userData =>{
      console.log(userData);
      sessionStorage.setItem('username',username);
      let tokenStr= 'Bearer '+userData.token;
      sessionStorage.setItem('token', tokenStr);
      return userData;
      },
      err => console.log('HTTP Error', err),

    )
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
