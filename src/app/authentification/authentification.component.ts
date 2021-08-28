import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
 
  username:String="" ;
  password:String="";
  constructor(private router:Router,  private route: ActivatedRoute, private auth:AuthenticationService) { }



  
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }
  
  connect(){
    console.log(this.username);
    console.log(this.password);

    this.auth.authenticate(this.username, this.password);

  }
}
