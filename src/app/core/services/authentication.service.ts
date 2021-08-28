import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  

  constructor(private router:Router ) { }


 authenticate(userName : String , password : String){

  if (userName === 'admin' &&  password === 'admin'){
   
    localStorage.setItem('isAuthenticated' , 'true' );
    this.router.navigate(['home']);

  }

 }


 
 

}
